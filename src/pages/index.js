import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
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
} from "../utils/constants.js";



//-------ФУНКЦИИ-------//

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
  cardList.addItem(createCard(data));
};

//добавление карт в контейнер 
const handleCardFormSubmit = (data) => {
  cardList.addItem(createCard(data));
};

//добавление на страницу принимает новых данных пользователя
const handleUserInfoFormSubmit = (data) => {
  userInfo.setUserInfo(data);

  profilePopup.close();
};



//-------СЛУШАТЕЛИ СОБЫТИЙ-------//

//открытие попапа добавления карты + очистка полей
profileButtonAdd.addEventListener('click', () => {
  validatorAddCard.resetValidation();
  newCardPopup.open();
});

//открытие попапа изменения профиля + заполнение полей ввода из профиля
profileButtonEdit.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;

  validatorProfileForm.resetValidation();
  profilePopup.open();
});



//-------ЗАГРУЗКА СТРАНИЦЫ-------//

//попап с изображением
const imagePopup = new PopupWithImage(popupConfig.popupViewingSelector);
//навешиваем слушатели событий
imagePopup.setEventListeners();

//передаем данные для отрисовки эл-ов на странице
const cardList = new Section({ items: initialCards, renderer: renderer }, cardListSelector);
//отрисовка всех элементов
cardList.renderItems();

//создание попапа добавления новой карты
const newCardPopup = new PopupWithForm(popupConfig.popupAddCardSelector, handleCardFormSubmit);
//навешиваем слушатели событий
newCardPopup.setEventListeners();

//создание эл-та класса UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__description'
});

//создание попапа изменения профиля
const profilePopup = new PopupWithForm(popupConfig.popupEditProfileSelector, handleUserInfoFormSubmit);
//навешиваем слушатели событий
profilePopup.setEventListeners();

//создаем экземпляры класса FormValidator и включаем валидацию форм
const validatorProfileForm = new FormValidator(validationConfig, formElementEditProfile);
validatorProfileForm.enableValidation();

const validatorAddCard = new FormValidator(validationConfig, formElementAddCard);
validatorAddCard.enableValidation();
