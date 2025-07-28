// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Step 3a: Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Step 3b: Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if no task is entered
        }

        // Step 4: Task Creation and Removal
        // Create a new <li> element for the task
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create a new remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        
        // Attach an event listener to remove the task when the button is clicked
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask); // Remove the <li> element
        });

        // Append the remove button to the <li> element
        newTask.appendChild(removeButton);

        // Append the new task <li> to the task list
        taskList.appendChild(newTask);

        // Step 5: Clear the task input field
        taskInput.value = "";
    }

    // Step 6: Attach Event Listeners
    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask function when "Enter" is pressed
        }
    });
});
