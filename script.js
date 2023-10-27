document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    let editingTask = null; // Store the task being edited

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            if (editingTask) {
                // If editing, update the edited task
                editingTask.querySelector("span").textContent = taskText;
                editingTask = null; // Reset the editing task
            } else {
                // If not editing, create a new task
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <span>${taskText}</span>
                    <div>
                        <button class="delete">Delete</button>
                        <button class="edit">Edit</button>
                    </div>
                `;
                taskList.appendChild(listItem);
                taskInput.value = "";

                // Add event listeners for the new task's buttons
                listItem.querySelector(".delete").addEventListener("click", function () {
                    listItem.remove();
                });

                listItem.querySelector(".edit").addEventListener("click", function () {
                    taskInput.value = listItem.querySelector("span").textContent;
                    editingTask = listItem; // Set the editing task
                });
            }
        }
    });
});
