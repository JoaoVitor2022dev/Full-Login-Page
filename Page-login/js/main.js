// obitendo os valores do document.html 

const $email = document.querySelector('#email'); 
const $passWord = document.querySelector('#password'); 
const $btnLogin = document.querySelector('#btn-login'); 
const $form = document.querySelector('#form'); 
const $textEmail = document.querySelector('#textEmail');
const $textPassword = document.querySelector('#textPassword'); 
const $textForm = document.querySelector('#text-login'); 

$form.addEventListener('submit', (e) => {
    e.preventDefault(); 
      
    if ($email.value === '' || $passWord.value === '') {
         $textForm.textContent = 'Preencha todos os campos'
    }
     
} ); 

