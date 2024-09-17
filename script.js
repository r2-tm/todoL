document.addEventListener('DOMContentLoaded', ()=>{
    // Get references to the input, button, and list elements
    const input = document.getElementById('todo-input');
    const button = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Function to create a new to-do item
    function createTodoItem(text) {
        const li = document.createElement('li');

        // Create the text node
        const span = document.createElement('span');
        span.textContent = text;

        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            todoList.removeChild(li);
        };

        // Add a click event to toggle 'finished' state
        span.onclick = function(){
            span.classList.toggle('finished');
        };

        // Append elements to the list item
        li.appendChild(span);
        li.appendChild(deleteBtn);

        return li;
    }

    // Event listener for the Add button
    button.addEventListener('click', ()=>{
        const text = input.value.trim();

        if (text !== '') {
            const todoItem = createTodoItem(text);
            todoList.appendChild(todoItem);
            input.value = ''; // Clear input field after adding
        } else {
            alert('Please enter a task.');
        }
    });

    //Allow pressing Enter to add item
    input.addEventListener('keypress', (e)=>{
        if (e.key === 'Enter') {
            button.click();
        }
    });
});

