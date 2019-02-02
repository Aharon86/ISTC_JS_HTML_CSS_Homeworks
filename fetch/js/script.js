function getObj() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(response => writeData(response))
      .catch(error => console.error('Error:', error));
}

 var ul = document.getElementsByTagName('ul')[0];

function writeData(res) {
    for (let i = 0; i < 5; i++) {
        var li = document.createElement('li');
        li.innerHTML += res[i].userId + '---';
        li.innerHTML += res[i].title + '---';
        li.innerHTML += res[i].completed
        ul.appendChild(li);
    }
    console.log(res);
}