const field = document.querySelector(".field");
const addBtn = document.querySelector(".add");
const list = document.querySelector(".list");

function createTask(value) {
  const task = document.createElement("div");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  task.textContent = value;
  task.appendChild(checkBox);
  checkBox.addEventListener("click", compliteTask);
  return task;
}

function addTaskToList() {
  if (field.value) {
    let newTask = createTask(field.value);
    list.appendChild(newTask);
  }
}

function compliteTask(event) {
  const target = event.target;
  if (target.checked) {
    target.parentElement.className = "success";
  } else {
    target.parentElement.className = null;
  }
}

addBtn.addEventListener("click", addTaskToList);
