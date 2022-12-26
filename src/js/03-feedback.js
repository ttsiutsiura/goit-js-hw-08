import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

fillFormInputs();

const data = {};

function onFormInput(event) {
  data.email = formEl.elements.email.value;
  data.message = formEl.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
  console.log(data);
}

function fillFormInputs() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData !== null) {
    formEl.elements.email.value = savedData.email;
    formEl.elements.message.value = savedData.message;
  }
}
