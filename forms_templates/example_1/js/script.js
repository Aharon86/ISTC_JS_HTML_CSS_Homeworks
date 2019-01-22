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

// input validation
var input = form_1.getElementsByTagName('input');
var regExp = {
    name: /^[a-z]+$/i,
    surname: /^[a-z]+$/i,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    username: /^[a-z]+\w*$/i,
    password: /^\w{6,14}$/i,
    confirm_password: /^\w{6,14}$/i
}
var validInput = {
    name: {valid: false, err: 'The name must have at least 1 letter'},
    surname: {valid: false, err: 'The surname must have at least 1 letter'},
    email: {valid: false, err: 'Pl. enter a correct email ex."exam@ex.com"'},
    username: {valid: false, err: 'The username must have at least 1 letteraa'},
    password: {valid: false, err: 'Password must be from 6 to 14 characters'},
    confirm_password: {valid: false, err: 'Please enter same password'}
}
var myValue = {};

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('input', validatorInput);
}

//  validation function
function validatorInput(event, inpOut) {
    var inp;

    if (inpOut) {
        inp = inpOut;
    } else {
        inp = this;
    }
    
    if (regExp[inp.name].test(inp.value)) {
        if (inp.name == 'confirm_password') {
            if (inp.value == myValue.password) {
                setCorrect(inp);
            }else{
                setWrong(inp);
            }
        }else{
            setCorrect(inp);
        }
    } else {
        setWrong(inp);
    }
    // console.log(regExp[inp.name].test(inp.value));
    // console.log(myValue );
}
// validation style and get any values
function setCorrect(inp) {
    inp.style.borderBottom = '2px solid green';
    inp.style.background = 'url("image/iconfinder_check.png") no-repeat right center';
    validInput[inp.name].valid = true;
    myValue[inp.name] = inp.value;
    inp.nextElementSibling.innerHTML = '';
}
function setWrong(inp) {
    inp.style.borderBottom = '2px solid red';
    inp.style.background = 'url("image/invalid.png") no-repeat right center';
    validInput[inp.name].valid = false;
    myValue[inp.name] = inp.value;
    inp.nextElementSibling.innerHTML = validInput[inp.name].err;
}

// The last check, sending data and receiving from the server

form_1.getElementsByTagName('button')[0].addEventListener('click', sendObj);

function sendObj() {
    // write errors
    for (var key in validInput) {
        validatorInput(event, document.getElementById(key).getElementsByTagName('input')[0]);
    }
    // breake or not
    for (var key in validInput) {
        if (!validInput[key].valid) {
            return;
        }
    }

    fetch("http://rest.learncode.academy/api/johnbob/friends", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(myValue), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(response => writeData(response))
      .catch(error => console.error('Error:', error));
}
// write response data
function writeData(data) {
    for (var key in data) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var text = document.createTextNode(key);
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement('td');
        text = document.createTextNode(data[key]);
        td.appendChild(text);
        tr.appendChild(td);
        document.getElementsByTagName('table')[0].appendChild(tr);
    }
    
}