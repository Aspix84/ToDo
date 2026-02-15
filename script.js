
const datePicker = document.querySelector('#datePicker')
const todoInput = document.querySelector('.todo__input')
const todoList = document.querySelector('.todo__list')
const todoBtn = document.querySelector('.todo__btn')
const todoListItem = document.querySelector('.todo__list li')
const msg = document.querySelector('.message')
const locationList = document.querySelector('.LocationList')
const selectedOption = getSelectedOption();

// const flatpickr = require("flatpickr"); 
// import flatpickr from "flatpickr";

flatpickr("#datePicker", {});

todoBtn.addEventListener('click', ()=> {
    if(todoInput.value === ""){
        msg.innerHTML = "Введите задачу"
        msg.className="error"
    }else{
        todoList.innerHTML += `<li>${datePicker.value} - ${getSelectedOption()} - ${todoInput.value}<span>\u00d7</span></li>`
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
    
locationList.addEventListener('change', getSelectedOption)

function getSelectedOption() {
  const dropdown = document.getElementById("Location");
  const selectedValue = dropdown.value;
  const selectedText = dropdown.options[dropdown.selectedIndex].text;
//   console.log("Selected Value:", selectedValue);
  return selectedText;
}

function saveData(){
    localStorage.setItem('data', todoList.innerHTML)    
}

function showTasks(){
   todoList.innerHTML = localStorage.getItem('data')
  
}

showTasks()
