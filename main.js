let signInBtn = document.querySelector('.signin-btn');
let signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.querySelector('body');
signUpBtn.addEventListener('click', function(){
  formBox.classList.add('active');
  body.classList.add('active');
});

signInBtn.addEventListener('click', function(){
  formBox.classList.remove('active');
  body.classList.remove('active');
});