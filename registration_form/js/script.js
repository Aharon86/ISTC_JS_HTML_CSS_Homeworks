// send data to the server and get the response

document.getElementsByClassName('but')[0].addEventListener('click', getValue);

function getValue() {
    var form1 = document.getElementById('form1').getElementsByTagName('input');
    var x = '';
    var obj = {
        "userId": form1[0].value, 
        "id": form1[1].value,
        "title": form1[4].value, 
        "body": form1[5].value
    };
    // var objSend = JSON.stringify(obj);
    // var xhttp = new XMLHttpRequest();

    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var data = JSON.parse(this.responseText);
    //         console.log(data);
            
    //     }
    // };
    // xhttp.open("POST", "http://rest.learncode.academy/api/johnbob/friends", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhttp.send(objSend);

    // --------------------------
    fetch("http://rest.learncode.academy/api/johnbob/friends", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(obj), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));

// ---------------------------------------------
    // for (let i = 0; i < form1.length; i++) {
    //     if ( form1[i].attributes[0].value == 'radio' ) {
    //         if (form1[i].checked) {
    //             x += form1[i].attributes[1].value + ':' + form1[i].value + '<br>';
    //         } 
    //         continue;
    //     } 
        
    //     x += form1[i].attributes[1].value + ':' + form1[i].value + '<br>';
    // }

    // document.getElementById('test').innerHTML += x;
}

//get the response
function loadDoc() {
    var arr = [];
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            // arr.push(data);
            console.log( data );
            console.log( Object.keys(data) );
            var ul = document.querySelector('ul');
            var li, text;

            Object.keys(data).map((item,index) => {
                li = document.createElement('LI');
                text = document.createTextNode(item + ': ' + data[item]);
                li.appendChild(text);
                ul.appendChild(li);
            
            })
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}