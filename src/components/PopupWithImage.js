import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open({ name, link}) {
    this._popupElement.querySelector('.popup-viewing__title').textContent = name;
    this._popupElement.querySelector('.popup-viewing__image').alt = name;
    this._popupElement.querySelector('.popup-viewing__image').src = link;

    super.open();
  }
}