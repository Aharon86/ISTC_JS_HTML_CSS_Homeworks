document.getElementById('add').addEventListener('click', addToDoList);  //get button and adding click function
document.getElementById('show_all').addEventListener('click', showAll);
document.getElementById('show_active').addEventListener('click', showActive);
document.getElementById('show_completed').addEventListener('click', showCompleted);

var err = document.getElementsByClassName('error')[0];      // get error field 
var section = document.getElementsByTagName('section')[0];  // get block for tasks
var taskList = [];                                          // array for adding tasks
var iconsClass = {                                          // object for icons
        check: 'far fa-check-square',
        trash: 'fas fa-trash-alt'
    };
var arrElements = [];                                      //block tasks

/* function to add tasks -----------------------------------------------------*/
function addToDoList() {
    var inp = document.getElementById('inp');           // get input field

    /* check filling input */
    if (inp.value == '') {
        err.innerHTML = 'Please enter the task!';
        return;
    }
    err.innerHTML = '';

    taskList.unshift( {task: inp.value, made: false} );    // adding front
    inp.value = ''; 
    createTaskTable(taskList[0]);                             // call function creating 
}

/* creating a task table ----------------------------------------------------------*/
function createTaskTable(listObj, id = 0) {
   
    /* creating previous task section and its nested items */
    var addBlock = document.createElement('div');
    changeStyle(addBlock, id);
    arrElements.unshift(addBlock);

    var text = document.createElement('p');
    text.appendChild(document.createTextNode(listObj.task));

    var iconCheck = document.createElement('i');
    iconCheck.className = iconsClass.check;

    var iconTrash = document.createElement('i');
    iconTrash.className = iconsClass.trash;

    addBlock.appendChild(iconCheck);
    addBlock.appendChild(text);
    addBlock.appendChild(iconTrash);
    section.insertBefore(addBlock, section.childNodes[0]);

    iconCheck.addEventListener('click', changeMade);
    iconTrash.addEventListener('click', deleteTask);
}
/* change task styles --------------------------------------------------------------*/
function changeStyle(block, id) {
    if (taskList[id].made) {
        block.className = 'done'; 
    } else {
        block.className = 'not_done'; 
    }
}
/* change task status */
function changeMade(event) {
    var eventBlock = event.target.parentElement;
    var taskId = arrElements.indexOf(eventBlock); 
    
    if (taskList[taskId].made) {                          
        taskList[taskId].made = false;
    } else {
        taskList[taskId].made = true;
    }
    changeStyle(eventBlock, taskId);
}
/* delete task---------------------------------------------------------------------*/
function deleteTask(event) {
    var eventBlock = event.target.parentElement;
    var taskId = arrElements.indexOf(eventBlock);
    taskList.splice(taskId, 1);
    arrElements.splice(taskId, 1);
    eventBlock.remove();
}
/* All tasks---------------------------------------------------------------------*/
function showAll() {
    section.innerHTML = ''; 
    for (let i = taskList.length - 1; i >= 0; i--) {
        createTaskTable(taskList[i], i);
    }
}
/* Active tasks------------------------------------------------------------------*/
function showActive() {
    arrElements = [];
    section.innerHTML = ''; 
    for (let i = taskList.length - 1; i >= 0; i--) {
        if (!taskList[i].made) {
            createTaskTable(taskList[i], i);
        } else {
            arrElements.unshift('');
        }
       
    }
}
/* Completed tasks----------------------------------------------------------------*/
function showCompleted() {
    arrElements = [];
    section.innerHTML = ''; 
    for (let i = taskList.length - 1; i >= 0; i--) {
        if (taskList[i].made) {
            createTaskTable(taskList[i], i);
        } else {
            arrElements.unshift('');
        }
    }
}