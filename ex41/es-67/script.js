const todoUrl = 'https://jsonplaceholder.typicode.com/todos/4';
const containerElement = document.querySelector('#container');

async function getTodo() {
  try {
    const response = await fetch(todoUrl);
    const todo = await response.json();
    const h2 = document.createElement('h2');
    h2.textContent = todo.title;
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.completed;
    containerElement.appendChild(h2);
    containerElement.appendChild(input);
  } catch (error) {
    console.error('Error fetching todo:', error);
  }
}

getTodo();
