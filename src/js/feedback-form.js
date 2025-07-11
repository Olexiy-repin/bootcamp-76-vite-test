import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './localstorage-api.js';
import lsApi from './localstorage-api.js';
import * as localStorageApi from './localstorage-api.js';

console.log(localStorageApi);

const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

let feedbackFormData = {};

const fillFeedbackFormFields = feedbackForm => {
  const feedbackFormDataFromLS = loadFromLocalStorage('feedback-form-state');

  if (feedbackFormDataFromLS === null) {
    return;
  }

  feedbackFormData = feedbackFormDataFromLS;

  const feedbackFormDataFromLSKeys = Object.keys(feedbackFormDataFromLS);

  feedbackFormDataFromLSKeys.forEach(key => {
    feedbackForm.elements[key].value = feedbackFormDataFromLS[key];
  });
};

fillFeedbackFormFields(refs.feedbackForm);

const onFeedbackFormFieldChange = ({ target: feedbackFormField }) => {
  const feedbackFormFieldValue = feedbackFormField.value.trim();
  const feedbackFormFieldName = feedbackFormField.name;

  feedbackFormData[feedbackFormFieldName] = feedbackFormFieldValue;

  saveToLocalStorage('feedback-form-state', feedbackFormData);
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};

refs.feedbackForm.addEventListener('change', onFeedbackFormFieldChange);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
