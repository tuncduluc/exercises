const todoUrl = 'https://jsonplaceholder.typicode.com/todos';
const todoListElement = document.querySelector('.todo-list');

async function getTodos() {
  try {
    const response = await fetch(todoUrl);
    const todos = await response.json();
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.title;
      todoListElement.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

getTodos();
