const formEL = document.querySelector('.login-form');

formEL.addEventListener('submit', evt => {
  evt.preventDefault();
  const email = formEL.elements.email.value.trim();
  const password = formEL.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  formEL.reset();
});
