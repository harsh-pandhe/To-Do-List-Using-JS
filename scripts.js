document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');

    addTodoBtn.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task) {
            addTodoItem(task);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            deleteTodoItem(e.target);
        } else if (e.target.tagName === 'LI') {
            toggleComplete(e.target);
        }
    });

    function addTodoItem(task) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    }

    function deleteTodoItem(button) {
        const li = button.parentNode;
        todoList.removeChild(li);
    }

    function toggleComplete(li) {
        li.classList.toggle('completed');
    }
});
