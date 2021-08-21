let popup = document.querySelector('.popup');
let profileButtonEdit = document.querySelector('.profile__button_edit');
let popupClose = document.querySelector('.popup__close')

function togglePopup() {
  popup.classList.toggle('popup__opened')
}

profileButtonEdit.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type-name');
let jobInput = document.querySelector('.popup__input_type-job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    /*if (!popup.classList.contains('popup__opened')) {
      nameIntup.textContent = nameProfile.textContent;
      jobInput.textContent = jobProfile.textContent;
    }*/
    // Получите значение полей jobInput и nameInput из свойства value
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 