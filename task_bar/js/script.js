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

    // console.log(taskList);

}

/* creating a task table */
function createTaskTable(list) {
    section.innerHTML = '';                         // clearing 'section' block

    /* creating previous task section and its nested items */
    for (let i = 0; i < list.length; i++) {
        var block = document.createElement('div');

        var span = document.createElement('span');
        span.appendChild(document.createTextNode(i));

        var text = document.createElement('p');
        text.appendChild(document.createTextNode(list[i].task));

        var iconCheck = document.createElement('i');
        iconCheck.className = iconsClass.check;

        var iconTrash = document.createElement('i');
        iconTrash.className = iconsClass.trash;

        /* checking tasks done or not done, and overeating the appropriate style */
        if (list[i].made) {                          
            block.className = 'done'; 
        } else {
            block.className = 'not_done'; 
            iconCheck.addEventListener('click', taskDone);
        }
        iconTrash.addEventListener('click', deleteTask);

        block.appendChild(span);
        block.appendChild(iconCheck);
        block.appendChild(text);
        block.appendChild(iconTrash);
        section.appendChild(block);
        
    }
    
}
/* if done it is marked true */
function taskDone(event) {
    var taskId = event.target.parentElement.children[0].innerHTML;
    taskList[taskId].made = true;
    createTaskTable(taskList);
}
/* delete task*/
function deleteTask(event) {
    var taskId = event.target.parentElement.children[0].innerHTML;
    taskList.splice(taskId, 1);
    createTaskTable(taskList);
}