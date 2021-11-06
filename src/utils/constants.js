const profileButtonEdit = document.querySelector('.profile__edit-button');
const formElementEditProfile = document.querySelector('.popup__form_edit-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileButtonAdd = document.querySelector('.profile__add-button');
const formElementAddCard = document.querySelector('.popup__form_add-card');
const cardListSelector = ('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;
const avatarEditButton = document.querySelector('.profile__avatar-button');
const formElementEditAvatar = document.querySelector('.popup__form_edit-avatar');
const avatarElement = document.querySelector('.profile__avatar');

const popupConfig = {
  popupViewingSelector: '.popup-viewing',
  popupEditProfileSelector: '.popup_edit-profile',
  popupAddCardSelector: '.popup_add-card',
  popupRemoveCardSelector: '.popup-confirm',
  popupEditAvatarSelector: '.popup_edit-avatar'
};

const removeCardPopupConfig = {
  popupSelector: '.popup-confirm',
  formSelector: '.popup__form_confirm'
}

//валидация
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error_visible'
};

export {
  profileButtonEdit,
  formElementEditProfile,
  nameInput,
  jobInput,
  profileButtonAdd,
  formElementAddCard,
  cardListSelector,
  cardTemplate,
  avatarEditButton,
  formElementEditAvatar,
  avatarElement,
  removeCardPopupConfig,
  popupConfig,
  validationConfig
};