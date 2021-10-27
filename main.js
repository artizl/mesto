(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_removeCardHandler",(function(e){e.target.closest(".card").remove()})),t(this,"_toggleCardLike",(function(e){e.target.classList.toggle("card__like-button_active")})),t(this,"generateCard",(function(){return i._cardElement=i._getTemplate(),i._setEventListener(),i._cardElement.querySelector(".card__image").src=i._link,i._cardElement.querySelector(".card__image").alt=i._name,i._cardElement.querySelector(".card__title").textContent=i._name,i._cardElement})),this._name=e.name,this._link=e.link,this._cardTemplate=r,this._handleCardClick=o}var r,o;return r=n,(o=[{key:"_setEventListener",value:function(){var e=this;this._cardElement.querySelector(".card__delete-button").addEventListener("click",this._removeCardHandler),this._cardElement.querySelector(".card__like-button").addEventListener("click",this._toggleCardLike),this._cardElement.querySelector(".card__image").addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})}))}},{key:"_getTemplate",value:function(){return this._cardTemplate.cloneNode(!0).children[0]}}])&&e(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_showInputError",(function(e){r._errorElement=r._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(r._inputErrorClass),r._errorElement.textContent=e.validationMessage,r._errorElement.classList.add(r._errorClass)})),o(this,"_hideInputError",(function(e){r._errorElement=r._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(r._inputErrorClass),r._errorElement.classList.remove(r._errorClass),r._errorElement.textContent=""})),o(this,"_checkInputValidity",(function(e){r._errorElement=r._formElement.querySelector("#".concat(e.id,"-error")),e.validity.valid?r._hideInputError(e):r._showInputError(e)})),o(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),o(this,"_hasNotInputValues",(function(){return r._inputList.every((function(e){return 0===e.value.length}))})),o(this,"_disableSubmitButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),o(this,"_enableSubmitButton",(function(){r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1})),o(this,"_toggleButtonState",(function(){r._hasInvalidInput()||r._hasNotInputValues()?r._disableSubmitButton():r._enableSubmitButton()})),o(this,"_setEventListener",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault(),r._toggleButtonState()})),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))})),r._toggleButtonState()})),o(this,"enableValidation",(function(){r._setEventListener()})),this._config=t,this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&r(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._openSelector="popup_is-opened",this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-icon"))&&e.close()}))}},{key:"close",value:function(){this._popupElement.classList.remove(this._openSelector),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popupElement.classList.add(this._openSelector),document.addEventListener("keydown",this._handleEscClose)}}])&&u(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},p(e,t,n||e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function _(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(){return l(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._popupElement.querySelector(".popup-viewing__title").textContent=t,this._popupElement.querySelector(".popup-viewing__image").alt=t,this._popupElement.querySelector(".popup-viewing__image").src=n,p(d(u.prototype),"open",this).call(this)}}])&&s(t.prototype,n),u}(a);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},v(e,t,n||e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function E(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popupFormElement=n._popupElement.querySelector(".popup__form"),n._handleFormSubmit=t,n}return t=u,(n=[{key:"close",value:function(){this._popupFormElement.reset(),v(g(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._popupFormElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()})),v(g(u.prototype),"setEventListeners",this).call(this)}},{key:"_getInputValues",value:function(){var e={};return Array.from(this._popupFormElement.querySelectorAll(".popup__input")).forEach((function(t){return e[t.name]=t.value})),e}}])&&h(t.prototype,n),u}(a);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&k(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=document.querySelector(t.nameSelector),this._jobProfile=document.querySelector(t.jobSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._nameProfile.textContent,e.job=this._jobProfile.textContent,e}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._nameProfile.textContent=t,this._jobProfile.textContent=n}}])&&C(t.prototype,n),e}(),L=document.querySelector(".profile__edit-button"),O=document.querySelector(".popup__form_edit-profile"),P=document.querySelector(".popup__input_type_name"),q=document.querySelector(".popup__input_type_job"),I=document.querySelector(".profile__add-button"),B=document.querySelector(".popup__form_add-card"),x=document.querySelector("#card-template").content,R={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_invalid",inputErrorClass:"popup__input_error",errorClass:"error_visible"},T=function(e){var t=e.name,n=e.link;D.open({name:t,link:n})},V=function(e){return new n(e,x,T).generateCard()};I.addEventListener("click",(function(){z.resetValidation(),A.open()})),L.addEventListener("click",(function(){var e=U.getUserInfo();P.value=e.name,q.value=e.job,H.resetValidation(),N.open()}));var D=new m(".popup-viewing");D.setEventListeners();var F=new w({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){F.addItem(V(e))}},".cards__list");F.renderItems();var A=new S(".popup_add-card",(function(e){F.addItem(V(e))}));A.setEventListeners();var U=new j({nameSelector:".profile__name",jobSelector:".profile__description"}),N=new S(".popup_edit-profile",(function(e){U.setUserInfo(e),N.close()}));N.setEventListeners();var H=new i(R,O);H.enableValidation();var z=new i(R,B);z.enableValidation()})();