import '../pages/index.css';
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";

const profileButtonEdit = document.querySelector('.profile__edit-button');
const formElementEditProfile = document.querySelector('.popup__form_edit-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const profileButtonAdd = document.querySelector('.profile__add-button');

const formElementAddCard = document.querySelector('.popup__form_add-card');

const cardsListElement = document.querySelector('.cards__list');
const cardListSelector = ('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;

const nameError = document.querySelector('#name-profile-error');
const jobError = document.querySelector('#job-profile-error');


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
}

//попап с изображением
const imagePopup = new PopupWithImage(popupConfig.popupViewingSelector);
imagePopup.setEventListeners();

//открытие попапа с изображнием 2 шаг 
const handleCardClick = ({ name, link }) => {
  imagePopup.open({ name, link });
};

//создание карты
const createCard = (dataCard) => {
  const card =  new Card(dataCard, cardTemplate, handleCardClick);
  return card.generateCard();
};
//отрисовка отдельных элементов
const renderer = (data) => {
  const card = createCard(data);
  cardsListElement.prepend(card);
}

///////________передаем данные для отрисовки эл-ов на странице________///////
const cardList = new Section({ items: initialCards, renderer: renderer }, cardListSelector);

//отрисовка всех элементов
cardList.renderItems();

//добавление карт в контейнер 
const handleCardFormSubmit = (data) => {
  cardList.addItem(createCard(data));
};

///////________создание попапа добавления новой карты________///////
const newCardPopup = new PopupWithForm(popupConfig.popupAddCardSelector, handleCardFormSubmit);
newCardPopup.setEventListeners();

//открытик попапа
profileButtonAdd.addEventListener('click', () => {
  newCardPopup.open();
});

//создание эл-та класса UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__description'
});

//добавление на страницу принимает новых данных пользователя
const handleUserInfoFormSubmit = (data) => {
  userInfo.setUserInfo(data);

  profilePopup.close();
};

///////________создание попапа изменения профиля________///////
const profilePopup = new PopupWithForm(popupConfig.popupEditProfileSelector, handleUserInfoFormSubmit);
profilePopup.setEventListeners();

//открытие попапа изменения профиля + заполнение полей ввода из профиля
profileButtonEdit.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  nameInput.classList.remove('popup__input_error');
  jobInput.classList.remove('popup__input_error');
  nameError.textContent = '';
  jobError.textContent = '';

  profilePopup.open();
});

//валидация
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error_visible'
};

const validatorProfileForm = new FormValidator(validationConfig, formElementEditProfile);
const validatorAddCard = new FormValidator(validationConfig, formElementAddCard);

validatorProfileForm.enableValidation();
validatorAddCard.enableValidation();
