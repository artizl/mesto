const popupEditProfile = document.querySelector('.popup_edit-profile');
const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupCloseEditProfile = document.querySelector('.popup__close-button_edit-profile');
const formElementEditProfile = document.querySelector('.popup__form_edit-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');

const popupAddCard = document.querySelector('.popup_add-card');
const profileButtonAdd = document.querySelector('.profile__add-button');
const popupCloseAddCard = document.querySelector('.popup__close-button_add-card');

const formElementAddCard = document.querySelector('.popup__form_add-card');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

const cardsListElement = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;

const popupViewing = document.querySelector('.popup-viewing');
const popupViewingContainer = document.querySelector('.popup-viewing__conteiner');
const popupViewingTitle = document.querySelector('.popup-viewing__title');
const popupViewingImage = document.querySelector('.popup-viewing__image');
const popupCloseViewing = document.querySelector('.popup-viewing__close-button');

const popupContainerEditProfile = document.querySelector('.popup__container_edit-profile');
const popupContainerAddCard = document.querySelector('.popup__container_add-card');




//создание карточки
const createCard = (card) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const popupViewingOpenButton = cardElement.querySelector('.card__image');
  popupViewingOpenButton.src = card.link;
  popupViewingOpenButton.alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', removeCardHandler);
  cardElement.querySelector('.card__like-button').addEventListener('click', toggleCardLike);
   
  popupViewingOpenButton.addEventListener('click', () => { 
    popupViewingImage.src = card.link; 
    popupViewingImage.alt = card.name;
    popupViewingTitle.textContent = card.name; 
   
    openPopup(popupViewing); 
  });

  return cardElement;
};

//добавление карточки в список
const addCard = (container, card) => { 
  container.prepend(card);
};

//добавление поста из попапа
const postingFormHandler = (event) => {
  event.preventDefault();
  addCard(cardsListElement, createCard({
    link: linkInput.value,
    name: titleInput.value
  }));

  formElementAddCard.reset();

  closePopup(popupAddCard);
};

//открытие попапа
const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
};

//закрытие попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
};

//удаление карточки
const removeCardHandler = (evt) => {
  evt.target.closest('.card').remove();
};

//лайки
const toggleCardLike = (evt) => {
  evt.target.classList.toggle('card__like-button_active');
};

//автозаполнение формы ред. профиля
const formSubmitHandler = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(popupEditProfile);
};

//закрытие Esc
const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_is-opened');
    closePopup(popupOpened);
  }
};

//обработчики событий

//попап ред.профиля
profileButtonEdit.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

formElementEditProfile.addEventListener('submit', formSubmitHandler);

popupCloseEditProfile.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

popupContainerEditProfile.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

popupEditProfile.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

//попап добавления карточки
profileButtonAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
});

formElementAddCard.addEventListener('submit', postingFormHandler);

popupCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard);
});

popupContainerAddCard.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

popupAddCard.addEventListener('click', () => {
  closePopup(popupAddCard);
});

//попап просм фото
popupCloseViewing.addEventListener('click', () => {
  closePopup(popupViewing);
});

popupViewingContainer.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

popupViewing.addEventListener('click', () => {
  closePopup(popupViewing);
});

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

initialCards.forEach((card) => {
  addCard(cardsListElement, createCard(card));
});



const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error_visible'
};

