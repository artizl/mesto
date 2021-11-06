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

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  //запрос с авторизацией
  _get(query) {
    const options = {
      headers: {
        authorization: this._token
      }
    }

    return fetch(this._url(query), options)
      .then(res => this._getResponseData(res));
  };

  _set(query, method, body) {
    const options = {
      method, 
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    }
    
    return fetch(this._url(query), options)
      .then(res => this._getResponseData(res));
  }

  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getCardList()])
  };

  //получение данных профиля
  getUserInfo() {
    return this._get('users/me');
  };

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

  //метод сохранения отредактированных данных пользователя на сервере
  saving(query, method, body) {
    return this._set(query, method, body);
  }
};