// obitendo os valores do document.html 

const $email = document.querySelector('#email'); 
const $passWord = document.querySelector('#password'); 
const $btnLogin = document.querySelector('#btn-login'); 
const $form = document.querySelector('#form'); 
const $textEmail = document.querySelector('#textEmail');
const $textPassword = document.querySelector('#textPassword'); 
const $textForm = document.querySelector('#text-login'); 

/* events  de  submit*/ 

$form.addEventListener('submit', (e) => {
    e.preventDefault();
       
   if ($email.value === '' || $passWord.value === '') {
        $textForm.textContent = 'Preencha todos os campos'
   } else if (isEmail($email.value) === true && isPassword($passWord.value) === true ) {
       console.log($email.value);
       console.log($passWord.value);
       $textForm.textContent = '' ;
       $textEmail.textContent = '';
       $textPassword.textContent ='';
       $email.value = ''; 
       $passWord.value = '';   
   } else {
      console.log('nao deu certo a requisiçao');
   }    
});

/* eventos de verificaçao */ 


$email.addEventListener('keyup', () => {
    if ( isEmail($email.value) !== true) {
       return $textEmail.textContent = "O formato do email deve ser Ex: nome123@abc.com"; 
    }
    $textEmail.textContent = "";  
}); 

$passWord.addEventListener('keyup', () => {
    if ( isPassword($passWord.value) !== true) {
       return $textPassword.textContent = "A senha deve ter 8 caracteris, e com (@#$) e uma letra maiuscula"; 
    }
    $textPassword.textContent = ''; 
}); 


/* function */ 

const isEmail = (email) => {
   let regexEmail = /\S+@\S+\.\S+/; 
    return regexEmail.test(email); 
};

const isPassword = (password) => {
    let regexPassWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/; 
      return regexPassWord.test(password); 
}; 

