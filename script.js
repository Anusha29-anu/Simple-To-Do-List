// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const emptyState = document.getElementById('emptyState');

// State
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Initialize the app
function init() {
    renderTasks();
    updateTaskCount();

    // Event Listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Set current filter and re-render
            currentFilter = this.getAttribute('data-filter');
            renderTasks();
        });
    });
}

// Add a new task
function addTask() {
    const text = taskInput.value.trim();

    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    updateTaskCount();

    // Clear input
    taskInput.value = '';
    taskInput.focus();
}

// Toggle task completion
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: !task.completed };
        }
        return task;
    });

    saveTasks();
    renderTasks();
    updateTaskCount();
}

// Delete a task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks based on current filter
function renderTasks() {
    // Filter tasks based on current selection
    let filteredTasks = tasks;

    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    // Clear the task list
    taskList.innerHTML = '';

    // Show/hide empty state
    if (filteredTasks.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';

        // Add each task to the list
        filteredTasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;

            taskItem.innerHTML = `
                <button class="complete-btn" onclick="toggleTask(${task.id})">
                    <i class="fas fa-${task.completed ? 'check-circle' : 'circle'}"></i>
                </button>
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="delete-btn" onclick="deleteTask(${task.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;

            taskList.appendChild(taskItem);
        });
    }
}

// Update task counter
function updateTaskCount() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const activeTasks = totalTasks - completedTasks;

    let countText = '';

    if (currentFilter === 'all') {
        countText = `${totalTasks} task${totalTasks !== 1 ? 's' : ''} total`;
    } else if (currentFilter === 'active') {
        countText = `${activeTasks} active task${activeTasks !== 1 ? 's' : ''}`;
    } else if (currentFilter === 'completed') {
        countText = `${completedTasks} completed task${completedTasks !== 1 ? 's' : ''}`;
    }

    taskCount.textContent = countText;
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);