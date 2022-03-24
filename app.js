const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const errorMsg = document.querySelector('.errorMsg');
const formControl = document.querySelector('.form__control');

const formHanlder = (e) => {
	e.preventDefault();

	const name = nameInput.value;
	const email = emailInput.value;
	const password = passwordInput.value;

	if (name === '') {
		errorHandler('name error', nameInput);
	}
	if (email === '') {
		errorHandler('email error', emailInput);
	}
	if (password === '') {
		errorHandler('password error', passwordInput);
	}
};

form.addEventListener('submit', formHanlder);

const errorHandler = (error, input) => {
	input.classList.add('error');
	let html = `
	<span>${error}</span>
	`;

	formControl.innerHTML += html;
};
