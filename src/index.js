import "./styles.css";
import{Todo, TodoList} from "./class/import-export"




const task     = new Todo("Aprender JavaScript");
const todoList = new TodoList();

todoList.newTodo( task );

console.log(todoList);



/*
const inputSelector = document.querySelector("#new-todo");

const buttonSelector =document.querySelector('#button');

const newTask = () => {

    answerSelector.innerHTML=inputSelector ;

  
}

//click button
buttonSelector.addEventListener('click',()=>{
  newTask();
});*/