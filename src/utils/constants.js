const profileButtonEdit = document.querySelector('.profile__edit-button');
const formElementEditProfile = document.querySelector('.popup__form_edit-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileButtonAdd = document.querySelector('.profile__add-button');
const formElementAddCard = document.querySelector('.popup__form_add-card');
const cardListSelector = ('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;

//шаблоны карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupConfig = {
  popupViewingSelector: '.popup-viewing',
  popupEditProfileSelector: '.popup_edit-profile',
  popupAddCardSelector: '.popup_add-card'
};

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
  initialCards,
  popupConfig,
  validationConfig
};