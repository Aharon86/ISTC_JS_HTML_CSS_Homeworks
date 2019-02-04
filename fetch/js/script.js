/* receiving data from the server */
function getObj() {                                    
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(response => writeData(response))                    // call writeData() function to display data
      .catch(error => console.error('Error:', error));
}

var ul = document.getElementsByTagName('ul')[0];        // get 'ul' element 

/*  */
function writeData(res) {
    for (let i = 0; i < 5; i++) {
        var li = document.createElement('li');
        for (let key in res[i]) {
            li.innerHTML += key + ': ' + res[i][key] + '; ';
        }
        ul.appendChild(li);
    }
    console.log(res);
}