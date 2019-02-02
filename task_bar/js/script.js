document.getElementById('but').addEventListener('click', addToDoList);  //get button and adding click function

var err = document.getElementsByClassName('error')[0];      // get error field 
var section = document.getElementsByTagName('section')[0];  // get block for tasks
var taskList = [];                                          // array for adding tasks
var iconsClass = {                                          // object for icons
        check: 'far fa-check-square',
        trash: 'fas fa-trash-alt'
    };

/* function to add tasks */
function addToDoList() {
    var inp = document.getElementById('inp');           // get input field

    /* check filling input */
    if (inp.value == '') {
        err.innerHTML = 'Please enter the task!';
        return;
    }
    err.innerHTML = '';

    taskList.unshift( {task: inp.value, made: false} );    // adding front
    inp.value = '';                                        // clearing input field
    createTaskTable(taskList);                             // call function creating 

    console.log(taskList);

}

/* creating a task table */
function createTaskTable(list) {
    section.innerHTML = '';                         // clearing 'section' block

    /* creating previous task section and its nested items */
    for (let i = 0; i < list.length; i++) {
        var block = document.createElement('div');
        block.classList.add('item'); 

        var span = document.createElement('span');
        span.appendChild(document.createTextNode(i));

        var text = document.createElement('p');
        text.appendChild(document.createTextNode(list[i].task));

        var iconCheck = document.createElement('i');
        iconCheck.className = iconsClass.check;

        var iconTrash = document.createElement('i');
        iconTrash.className = iconsClass.trash;

        block.appendChild(span);
        block.appendChild(iconCheck);
        block.appendChild(text);
        block.appendChild(iconTrash);
        section.appendChild(block);
        
    }
    
}