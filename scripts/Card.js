export default class Card  {
  constructor(name, link, cardTemplate, openPopupViewing) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
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
    const cardElement = this._cardTemplate.cloneNode(true).children[0];

    return cardElement;
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