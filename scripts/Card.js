export default class Card  {
  static _template = document.querySelector('#card-template').content;

  constructor(name, link, openPopupViewing) {
    this._name = name;
    this._link = link;
    this._openPopupViewing = openPopupViewing;
  };

  //добавляем события
  _setEventListener() {
    this._cardElement.querySelector('.card__delete-button').addEventListener('click', this._removeCardHandler);
    this._cardElement.querySelector('.card__like-button').addEventListener('click', this._toggleCardLike);
    this._cardElement.querySelector('.card__image').addEventListener('click', () => {
      this._openPopupViewing(this._name, this._link);
    });
  };

  //клонируем темпл эл-т
  _getTemplate() {
    this._cardCloneTemplate = Card._template.cloneNode(true).children[0];

    return this._cardCloneTemplate;
  };

  //удаление карточки
  _removeCardHandler = (evt) => {
    evt.target.closest('.card').remove();
  };

  //лайки
  _toggleCardLike = (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  };

  generateCard = () => {
    this._cardElement = this._getTemplate();
    this._setEventListener();
    this._cardElement.querySelector('.card__image').src = this._link;
    this._cardElement.querySelector('.card__image').alt = this._name;
    this._cardElement.querySelector('.card__title').textContent = this._name;

    return this._cardElement;
  };
};