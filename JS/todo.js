
const field= document.querySelector('.field');
const addBtn= document.querySelector('.add');
const list= document.querySelector('.list');
console.log('объявили field, add, list');

 function createTask(value) {
    const task = document.createElement('div');
    const checkBox = document.createElement('input');
    checkBox.type='checkbox';
    
    task.textContent =value;
    task.appendChild(checkBox);
    checkBox.addEventListener('click',compliteTask);
    console.log('createTask прошел');

    return task;
    }
  
 function addTaskToList() {
     if(field.value){
         let newTask=createTask(field.value);
         console.log('addTaskToList прошел');
         list.appendChild(newTask);
         
         
     }}
 function compliteTask(event) {
         const target =event.target;
            parentelement = target.parentElement;
            if (target.checked== true) {
                target.parentElement.className = "success" ;
            }
            else{
                target.parentElement.className = '';
            }
         }
         
     
 
addBtn.addEventListener('click', addTaskToList);
 
