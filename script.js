// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Load tasks from Local Storage and display them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false prevents re-saving to Local Storage
    }

    // Step 4: Create the addTask Function
    function addTask(taskText, save = true) {
        // Step 4a: Check if the task text is not empty
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return; // Exit if task text is empty
        }

        // Create a new <li> element for the task
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create a new remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        
        // Attach an event listener to remove the task when the button is clicked
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask); // Remove the <li> element from the DOM
            removeTaskFromStorage(taskText); // Remove task from Local Storage
        });

        // Append the remove button to the <li> element
        newTask.appendChild(removeButton);

        // Append the new task <li> to the task list
        taskList.appendChild(newTask);

        // Step 4b: Save task to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText); // Add new task to array
            localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Update Local Storage
        }

        // Step 5: Clear the task input field
        taskInput.value = "";
    }

    // Step 6: Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove task from array
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update Local Storage
    }

    // Step 7: Attach Event Listeners
    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        addTask(taskText); // Add task and save to Local Storage
    });

    // Add task when the "Enter" key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText); // Add task and save to Local Storage
        }
    });

    // Step 8: Load tasks from Local Storage when page is loaded
    loadTasks();

});
