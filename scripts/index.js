const popupEditProfile = document.querySelector('.popup_edit-profile');
const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupCloseEditProfile = document.querySelector('.popup__close-button_edit-profile');

const togglePopupEditProfile = () => {
  popupEditProfile.classList.toggle('popup_is-opened');
};

profileButtonEdit.addEventListener('click', togglePopupEditProfile);
popupCloseEditProfile.addEventListener('click', togglePopupEditProfile);


const formElementEditProfile = document.querySelector('.popup__form_edit-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');


const formSubmitHandler = (evt) => {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
};

formElementEditProfile.addEventListener('submit', formSubmitHandler);
formElementEditProfile.addEventListener('submit', togglePopupEditProfile);

const copyProfileTextToInput = () => {
  if (!popupEditProfile.classList.contains('popup__is-opened')) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }
};

profileButtonEdit.addEventListener('click', copyProfileTextToInput);

///////////////////////////////////////////////////////////////////////////////

const popupAddCard = document.querySelector('.popup_add-card');
const profileButtonAdd = document.querySelector('.profile__add-button');
const popupCloseAddCard = document.querySelector('.popup__close-button_add-card');

const togglePopupAddCard = () => {
  popupAddCard.classList.toggle('popup_is-opened');
};

profileButtonAdd.addEventListener('click', togglePopupAddCard);
popupCloseAddCard.addEventListener('click', togglePopupAddCard);

const formElementAddCard = document.querySelector('.popup__form_add-card');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');


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

const cardsListElement = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;
//функции
const removeCardHandler = (event) => {
  event.target.closest('.card').remove();
};

//лайки
const toggleCardLike = (event) => {
  event.target.classList.toggle('card__like-button_active');
};

const addCard = (card) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', removeCardHandler);
  cardElement.querySelector('.card__like-button').addEventListener('click', toggleCardLike);

  cardsListElement.prepend(cardElement);

  const popupViewingOpenButton = document.querySelector('.card__image');

  popupViewingOpenButton.addEventListener('click', (event) => {
    popupViewingImage.src = event.target.src;
    popupViewingImage.alt = event.target.closest('.card').querySelector('.card__title').textContent;
    popupViewingTitle.textContent = event.target.closest('.card').querySelector('.card__title').textContent;
  
    togglePopupViewing(popupViewing);
  });
};

const postingFormHandler = (event) => {
  event.preventDefault();

  addCard({
    link: linkInput.value,
    name: titleInput.value
  });

  formElementAddCard.reset();
};
//слушатели событий
formElementAddCard.addEventListener('submit', postingFormHandler);
formElementAddCard.addEventListener('submit', togglePopupAddCard);

initialCards.forEach((card) => {
  addCard(card);
});

//просмотр изображения

const popupViewing = document.querySelector('.popup-viewing');
const popupViewingTitle = document.querySelector('.popup-viewing__title');
const popupViewingImage = document.querySelector('.popup-viewing__image');
const popupCloseViewing = document.querySelector('.popup__close-button_viewing');

const togglePopupViewing = (popup) => {
  popup.classList.toggle('popup_is-opened');
};

popupViewing.addEventListener('click', () => {
  togglePopupViewing(popupViewing);
});