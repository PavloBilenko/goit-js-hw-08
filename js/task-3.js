const inputEL = document.querySelector('#name-input');
const outputEL = document.querySelector('#name-output');

inputEL.addEventListener('input', () => {
  const trimmedValue = inputEL.value.trim();
  outputEL.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
