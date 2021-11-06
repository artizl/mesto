import Popup from "./Popup.js";

export default class PopupWithForm extends Popup  {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupFormElement = this._popupElement.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
    this._button = this._popupFormElement.querySelector('.popup__submit-button');
    this._textButton = this._button.textContent;
  }

  close() {
    this._popupFormElement.reset();
    super.close();
  }

  renderSaving(status){
    if(status){
      this._button.textContent = `Cохранение...`;
    } else {
      this._button.textContent = this._textButton;
    }
  }

  setEventListeners() {
    this._popupFormElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    
    super.setEventListeners();
  }

  _getInputValues() {
    const formValues = {};
    const inputList = Array.from(this._popupFormElement.querySelectorAll('.popup__input'));
    inputList.forEach(inputElement => formValues[inputElement.name] = inputElement.value);
    return formValues;
  }
}