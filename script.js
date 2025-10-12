const todoInput = document.querySelector('.todo__input')
const todoList = document.querySelector('.todo__list')
const todoBtn = document.querySelector('.todo__btn')
const todoListItem = document.querySelector('.todo__list li')
const msg = document.querySelector('.message')

todoBtn.addEventListener('click', ()=> {
    if(todoInput.value === ""){
        msg.innerHTML = "Введите задачу"
        msg.className="error"
    }else{
        todoList.innerHTML += `<li>${todoInput.value}<span>\u00d7</span></li>`
        todoInput.value = ""
         msg.className=""
         msg.innerHTML=""
         saveData()
    }    
})

todoList.addEventListener('click', (event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked')
         saveData()
    }else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove()
         saveData()
    }
})

function saveData(){
    localStorage.setItem('data', todoList.innerHTML)    
}

function showTasks(){
   todoList.innerHTML = localStorage.getItem('data')
  
}

showTasks()
