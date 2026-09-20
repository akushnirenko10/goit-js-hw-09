let formData = { email: '', message: '' };
const formKey = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const saved = JSON.parse(localStorage.getItem(formKey));

if (saved) {
  formData = { ...formData, ...saved };
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onSubmitForm);

function onFormInput({ target }) {
  formData[target.name] = target.value.trim();

  localStorage.setItem(formKey, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(formKey);
  formData = { email: '', message: '' };
  refs.form.reset();
}
