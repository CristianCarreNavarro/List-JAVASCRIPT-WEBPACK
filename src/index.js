import "./styles.css";
import{ Todo, TodoList, createTodoDiv } from "./import-export.js"





const task     = new Todo("Aprender frfffidooooo");
const todoList = new TodoList();

todoList.newTodo( task );

task.completed=false;
createTodoDiv(task);


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