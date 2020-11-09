'use strict';

var POPUP_FORM_CLASS_HIDDEN = 'search__popup-form-hidden';
var KEY_ESCAPE = 'Escape';

var buttonSearch = document.getElementById('button_search');
var popupForm = document.getElementById('popup_form');

popupForm.classList.add(POPUP_FORM_CLASS_HIDDEN);

buttonSearch.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popupForm.classList.contains(POPUP_FORM_CLASS_HIDDEN)) {
    popupForm.classList.remove(POPUP_FORM_CLASS_HIDDEN);
  } else {
    popupForm.classList.add(POPUP_FORM_CLASS_HIDDEN);
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === KEY_ESCAPE) {
    if (!popupForm.classList.contains(POPUP_FORM_CLASS_HIDDEN)) {
      popupForm.classList.add(POPUP_FORM_CLASS_HIDDEN);
    }
  }
});
