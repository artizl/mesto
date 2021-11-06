import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector, formSelector }) {
    super(popupSelector)
    this._formElement = document.querySelector(formSelector)
  }

  setSubmitHandler(handleSubmit) {
    this._handleSubmit = handleSubmit
  }

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleSubmit()
    })
  }
}