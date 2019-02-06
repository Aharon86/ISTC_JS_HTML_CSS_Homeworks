document.getElementById('add').addEventListener('click', addToDoList);  //get button and adding click function

var err = document.getElementsByClassName('error')[0];      // get error field 
var section = document.getElementsByTagName('section')[0];  // get block for tasks
var taskList = [];                                          // array for adding tasks
var iconsClass = {                                          // object for icons
        check: 'far fa-check-square',
        trash: 'fas fa-trash-alt'
    };
var arrElements = [];                                      //block tasks

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
}


/* creating a task table */
function createTaskTable(list) {
    // section.innerHTML = '';                         // clearing 'section' block

    arrElements = [];

    /* creating previous task section and its nested items */
    // for (let i = 0; i < list.length; i++) {
        var block = document.createElement('div');

        var text = document.createElement('p');
        text.appendChild(document.createTextNode(list[0].task));

        var iconCheck = document.createElement('i');
        iconCheck.className = iconsClass.check;

        var iconTrash = document.createElement('i');
        iconTrash.className = iconsClass.trash;

        block.appendChild(iconCheck);
        block.appendChild(text);
        block.appendChild(iconTrash);
        section.appendChild(block);

        /* checking tasks done or not done, and overeating the appropriate style */
        if (list[0].made) {                          
            block.className = 'done'; 
        } else {
            block.className = 'not_done'; 
            iconCheck.addEventListener('click', taskDone);
        }
        iconTrash.addEventListener('click', deleteTask);

        arrElements.push(block);                                       
        
    // }

    // console.log(arrElements);
}

/* if done it is marked true */
function taskDone(event) {
    var taskId = arrElements.indexOf(event.target.parentElement);
    taskList[taskId].made = true;
    createTaskTable(taskList);
}
/* delete task*/
function deleteTask(event) {
    var taskId = arrElements.indexOf(event.target.parentElement);
    taskList.splice(taskId, 1);
    createTaskTable(taskList);
}