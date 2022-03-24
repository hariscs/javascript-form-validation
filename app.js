const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const errorMsg = document.querySelector('.errorMsg');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');
// const formControl = document.querySelector('.form__control');

const formHanlder = (e) => {
	e.preventDefault();

	const name = nameInput.value;
	const email = emailInput.value;
	const password = passwordInput.value;

	if (name === '') {
		nameError.innerText = 'name error';
		nameInput.classList.add('error');
		nameInput.classList.remove('success');
	} else {
		nameError.innerText = '';
		nameInput.classList.add('success');
		nameInput.classList.remove('error');
	}
	if (email === '') {
		emailError.innerText = 'email error';
		emailInput.classList.add('error');
		emailInput.classList.remove('success');
	} else {
		emailError.innerText = '';
		emailInput.classList.add('success');
		emailInput.classList.remove('error');
	}
	if (password === '') {
		passwordInput.classList.add('error');
		passwordError.innerText = 'password error';
		passwordInput.classList.remove('success');
	} else {
		passwordError.innerText = '';
		passwordInput.classList.add('success');
		passwordInput.classList.remove('error');
	}
};

form.addEventListener('submit', formHanlder);
