let popup = document.querySelector('.popup');
let profileButtonEdit = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close-button')

function togglePopup() {
  popup.classList.toggle('popup_is-opened')
}

profileButtonEdit.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', togglePopup);

function copyProfileTextToInput () {
  if (!popup.classList.contains('popup__is-opened')) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }
}

profileButtonEdit.addEventListener('click', copyProfileTextToInput);