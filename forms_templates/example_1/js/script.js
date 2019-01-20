// change between windows
var signUp = document.getElementsByClassName('sign_up')[0];
var signIn = document.getElementsByClassName('sign_in')[0];
var form1 = document.getElementById('form_1');
var form2 = document.getElementById('form_2');
signUp.addEventListener('click', changeSignUp);
signIn.addEventListener('click', changeSignIn);

function changeSignUp() {
    signUp.style.color = 'white';
    signUp.style.fontWeight = '700';
    signUp.style.borderBottom = '3px solid #4BD2D8';
    form1.style.zIndex = '2';
    signIn.style.color = '#98A2BB';
    signIn.style.fontWeight = '100';
    signIn.style.borderBottom = '3px solid #5B779F';
    form2.style.zIndex = '1';
}

function changeSignIn() {
    signIn.style.color = 'white';
    signIn.style.fontWeight = '700';
    signIn.style.borderBottom = '3px solid #4BD2D8';
    form2.style.zIndex = '2';
    signUp.style.color = '#98A2BB';
    signUp.style.fontWeight = '100';
    signUp.style.borderBottom = '3px solid #5B779F';
    form1.style.zIndex = '1';
}