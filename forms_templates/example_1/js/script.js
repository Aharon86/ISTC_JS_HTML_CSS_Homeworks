// change between windows
var sign_up = document.getElementById('sign_up');
var sign_in = document.getElementById('sign_in');
var form1 = document.getElementById('form_1');
var form2 = document.getElementById('form_2');
sign_up.addEventListener('click', changeSignUp);
sign_in.addEventListener('click', changeSignIn);

function changeSignUp() {
    sign_up.classList = 'active';
    form1.style.display = 'block';
    sign_in.classList = 'not_active';
    form2.style.display = 'none';
}

function changeSignIn() {
    sign_up.classList = 'not_active';
    form2.style.display = 'block';
    sign_in.classList = 'active';
    form1.style.display = 'none';
}

// input validation
var input = document.getElementsByTagName('input');
var regExp = {
    name: /^[a-z]+$/i,
    surname: /^[a-z]+$/i,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    username: /^[a-z]+\w*$/i,
    password: /^\w{6,14}$/i,
    confirm_password: /^\w{6,14}$/i
}
var validInput = {
        sign_up: {
            name: {valid: false, err: 'The name must have at least 1 letter'},
            surname: {valid: false, err: 'The surname must have at least 1 letter'},
            email: {valid: false, err: 'Pl. enter a correct email ex."exam@ex.com"'},
            username: {valid: false, err: 'The username must have at least 1 letteraa'},
            password: {valid: false, err: 'Password must be from 6 to 14 characters'},
            confirm_password: {valid: false, err: 'Please enter same password'}
        },
        sign_in: {
            username: {valid: false, err: 'The username must have at least 1 letteraa'},
            password: {valid: false, err: 'Password must be from 6 to 14 characters'}
        }
}
var myValue = {};

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('input', validatorInput);
}

//  validation function
function validatorInput(event, inpOut, objKey) {
    var inp, keyValidInput;

    if (inpOut) {
        inp = inpOut;
        keyValidInput = objKey;
    } else {
        inp = this;
        if (inp.parentElement.parentElement.id == 'form_1' ) {
            keyValidInput = 'sign_up'; 
        }else{
            keyValidInput = 'sign_in'; 
        }
        
    }
    
    if (regExp[inp.name].test(inp.value)) {
        if (inp.name == 'confirm_password') {
            if (inp.value == myValue.password) {
                setCorrect(inp, keyValidInput);
            }else{
                setWrong(inp, keyValidInput);
            }
        }else{
            setCorrect(inp, keyValidInput);
        }
    } else {
        setWrong(inp, keyValidInput);
    }
    // console.log(regExp[inp.name].test(inp.value));
    // console.log(myValue );
}
// validation style and get any values
function setCorrect(inp, keyValidInput) {
    inp.style.borderBottom = '2px solid green';
    inp.style.background = 'url("image/iconfinder_check.png") no-repeat right center';
    validInput[keyValidInput][inp.name].valid = true;
    myValue[inp.name] = inp.value;
    inp.nextElementSibling.innerHTML = '';
}
function setWrong(inp, keyValidInput) {
    inp.style.borderBottom = '2px solid red';
    inp.style.background = 'none';
    validInput[keyValidInput][inp.name].valid = false;
    myValue[inp.name] = inp.value;
    inp.nextElementSibling.innerHTML = validInput[keyValidInput][inp.name].err;
}
function clearValueStyle(inp) {
    inp.removeAttribute("style");
    inp.value = '';
}

// The last check, sending data and receiving from the server

form1.getElementsByTagName('button')[0].addEventListener('click', sendObj);
form2.getElementsByTagName('button')[0].addEventListener('click', sendObj);

function sendObj() {
    var kayValidInput;
    if (this.parentElement.id == 'form_1' ) {
        keyValidInput = 'sign_up'; 
    }else{
        keyValidInput = 'sign_in'; 
    }
    // write errors
    for (var key in validInput[keyValidInput]) {
        validatorInput(event, this.parentElement.getElementsByClassName(key)[0] , keyValidInput );
    }
    // breake or not
    for (var key in validInput[keyValidInput]) {
        if (!validInput[keyValidInput][key].valid) {
            return;
        }
    }
    // if all values are correct return standard styles
    for (var key in validInput[keyValidInput]) {
        clearValueStyle(this.parentElement.getElementsByClassName(key)[0]);
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