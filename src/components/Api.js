export default class Api {
  constructor({ address, groupId, token }) {
    this._address = address;
    this._groupId = groupId;
    this._token = token;
  };

  //адрес обращения
  _url(query) {
    return `${this._address}/${this._groupId}/${query}`
  };

  //запрос с авторизацией
  _get(query) {
    const options = {
      headers: {
        authorization: this._token
      }
    }

    return fetch(this._url(query), options)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  };

  _set(query, method, body) {
    console.log(body)
    const options = {
      method, 
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    }
    console.log(options)
    return fetch(this._url(query), options)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  }

  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getCardList()])
  };

  //получение данных профиля
  getUserInfo() {
    return this._get('users/me');
  };

  //метод сохранения отредактированных данных пользователя на сервере
  savingUserChanges(query, method, body) {
    return this._set(query, method, body);
  }
  //метод сохранения новой карточки на сервере
  savingNewCard(query, method, body) {
    return this._set(query, method, body);
  }

  removeCard(id) {
    return this._set(`cards/${id}`, 'DELETE')
  }

  //получение данных по карточкам с сервера
  getCardList() {
    return this._get(`cards`);
  };

  updateCardLike(id, liked) {
    return this._set(`cards/likes/${id}`, liked ? 'PUT' : 'DELETE')
  }

  editAvatar(src) {
    return this._set('users/me/avatar', 'PATCH', {avatar: `${src.link}`})
  }
};