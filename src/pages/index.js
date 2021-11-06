import './index.css';
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirm from"../components/PopupWithConfirm.js";
import { renderLoading } from "../utils/utils.js";

import {
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
  popupConfig,
  validationConfig,
  removeCardPopupConfig
} from "../utils/constants.js";

let userId = null;

//создаем экземпляр класса Api
const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1',
  groupId: 'cohort-29',
  token: '2049004d-af8a-48fd-8cf8-23dcf534a040'
});

//получение от серера информации о профиле и списке карточек
api
  .getAppInfo()
  .then(([ userInfoRes, cardListRes ]) => {
    userInfo.setUserInfo(userInfoRes);
    userId = userInfoRes._id;
    cardList.renderItems(cardListRes);
  })
  .catch(err => console.log(`Ошибка загрузки данных: ${err}`))



//-------ФУНКЦИИ-------//

//открытие попапа с изображнием 2 шаг 
const handleCardClick = ({ name, link }) => {
  imagePopup.open({ name, link });
};

//создание карты
const createCard = (data) => {
  const card =  new Card(data, cardTemplate, handleCardClick, handleLikeClick, handleCardRemove, userId);
  return card.generateCard();
};

//отрисовка отдельных элементов
const renderer = (item) => {
  cardList.addItem(createCard(item));
};

//добавление карт в контейнер 
const handleCardFormSubmit = (data) => {
  newCardPopup.renderSaving(true);
  console.log(data);
  api.savingNewCard('cards', 'POST', data)
    .then((data) => {
      cardList.addItem(createCard(data));
      newCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      newCardPopup.renderSaving(false);
    })
};

//добавление на страницу новых данных пользователя
const handleUserInfoFormSubmit = (data) => {
  console.log(data);
  userInfo.setUserInfo(data);
  api.savingUserChanges('users/me', 'PATCH', data);
  profilePopup.close();
};

//ставим лайк
const handleLikeClick = (card) => {
  api
    .updateCardLike(card.getId(), !card.checkLike())
    .then(data => card.setLikes(data.likes))
    .catch(err => console.log(`Не удалось изменить состояние лайка карточки: ${err}`))
}

//const handleSubmit = (card) => 

//удаление карты
const handleCardRemove = (card) => {
  removeCardPopup.open()
  removeCardPopup.setSubmitHandler(() => {
    renderLoading(removeCardPopupConfig.popupSelector, true, 'Да', 'Удаление...')
    api
      .removeCard(card.getId())
      .then(() => {
        card.remove()
        removeCardPopup.close()
      })
      .catch(err => console.log(`Не удалось удалить карточку: ${err}`))
      .finally(() => {
        renderLoading(removeCardPopupConfig.popupSelector, false, 'Да', 'Удаление...')
      }
      )
  })
}

const handlePopupEditAvatar = (data) => {
  api.editAvatar(data);
  avatarElement.src = data.link;
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
  jobInput.value = data.about;

  validatorProfileForm.resetValidation();
  profilePopup.open();
});

avatarEditButton.addEventListener('click', () => {
  validatorEditAvatar.resetValidation();
  editAvatarPopup.open();
})





//-------ЗАГРУЗКА СТРАНИЦЫ-------//

//попап с изображением
const imagePopup = new PopupWithImage(popupConfig.popupViewingSelector);
//навешиваем слушатели событий
imagePopup.setEventListeners();

//передаем данные для отрисовки эл-ов на странице
const cardList = new Section(renderer, cardListSelector);
//отрисовка всех элементов

//создание попапа добавления новой карты
const newCardPopup = new PopupWithForm(popupConfig.popupAddCardSelector, handleCardFormSubmit);
//навешиваем слушатели событий
newCardPopup.setEventListeners();

//создание попапа удаления карты
const removeCardPopup = new PopupWithConfirm(removeCardPopupConfig, handleCardRemove);
removeCardPopup.setEventListeners();

const editAvatarPopup = new PopupWithForm(popupConfig.popupEditAvatarSelector, handlePopupEditAvatar);
editAvatarPopup.setEventListeners();


//создание эл-та класса UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__description',
  avatarSelector: '.profile__avatar'
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

const validatorEditAvatar = new FormValidator(validationConfig, formElementEditAvatar);
validatorEditAvatar.enableValidation();