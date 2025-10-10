const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');
const todoBtn = document.querySelector('.todo__btn');

todoBtn.addEventListener('click', function() {
    todoList.innerHTML += `<li>${todoInput.value}</li>`;
});