export default class Card {
  constructor(data, cardTemplate, handleCardClick, handleLikeClick, handleCardRemove, userId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id; //ид карты
    this._userId = userId; //мой ид
    this._ownerId = data.owner._id; //ид автора карты
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;   
    this._handleCardRemove = handleCardRemove; 
  };

  //добавляем события
  _setEventListener() {
    this._cardElement.querySelector('.card__delete-button').addEventListener('click', () => this._handleCardRemove(this));
    this._cardElement.querySelector('.card__like-button').addEventListener('click', () => this._handleLikeClick(this));
    //открытие попапа с изображнием 1 шаг
    this._cardElement.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  };

  //клонируем темпл эл-т
  _getTemplate() {
    const cardElement = this._cardTemplate.cloneNode(true).children[0];
    return cardElement;
  };

  //проверка лайка
  checkLike() {
    return Boolean(this._likes.find(like => {
      return like._id === this._userId;
    }));
  }

  setLikes(likes) {
    this._likes = likes
    this._updateLikes()
  }

  getId() {
    return this._cardId;
  }

  remove() {
    this._cardElement.remove()
    this._cardElement = null
  }

  _updateLikes() {
    this._cardElement.querySelector('.card__sum-like').textContent = this._likes.length;

    if (this.checkLike()) {
      this._like.classList.add('card__like-button_active');
    } else {
      this._like.classList.remove('card__like-button_active');
    }
  }
 

  generateCard = () => {
    this._cardElement = this._getTemplate();
    this._like = this._cardElement.querySelector('.card__like-button');
    this._setEventListener();
    const cardImage =  this._cardElement.querySelector('.card__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._cardElement.querySelector('.card__title').textContent = this._name;
    this._cardElement.querySelector('.card__delete-button').classList.add(
      this._userId === this._ownerId ? 'card__delete-button_visible' : 'card__delete-button_hidden'
    )
    this.setLikes(this._likes);

    return this._cardElement;
  };
};