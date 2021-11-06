export default class Popup{
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._openSelector = 'popup_is-opened';
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  //публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы
  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        this.close()
      };
    })
  }
  
  //закрытие попапа
  close() {
    this._popupElement.classList.remove(this._openSelector);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  //открытие попапа
  open() {
    this._popupElement.classList.add(this._openSelector);
    document.addEventListener('keydown', this._handleEscClose);
    //this.setEventListeners();
  }
};