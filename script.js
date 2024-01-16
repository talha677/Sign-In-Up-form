const mainContainer = document.querySelector('.main-container');
const signupLink = document.querySelector('.signup-link');
const loginLink = document.querySelector('.login-link');


signupLink.onclick = () => {
    mainContainer.classList.add('active');
}

loginLink.onclick = () => {
    mainContainer.classList.remove('active');
}