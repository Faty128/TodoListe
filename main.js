// ajout d'une tâche : l'utilisateur peut ajouter n tâches qu'il veut
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      var taskList = document.getElementById("taskList");
    
      var taskItem = document.createElement("div");
      taskItem.className = "task alert alert-light";
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="btn btn-danger btn-sm" onclick="setStatus(this, 'todo')">To Do</button>
        <button class="btn btn-warning btn-sm" onclick="setStatus(this, 'doing')">Doing</button>
        <button class="btn btn-success btn-sm" onclick="setStatus(this, 'done')">Done</button>
      `;
    
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
    }
    
    function setStatus(button, status) {
    var taskItem = button.parentNode;
    taskItem.classList.remove("bg-danger", "bg-warning", "bg-success");
    
    switch (status) {
      case "todo":
        taskItem.classList.add("bg-danger");
        break;
      case "doing":
        taskItem.classList.add("bg-warning");
        break;
      case "done":
        taskItem.classList.add("bg-success");
        break;
    }
    }
    
    