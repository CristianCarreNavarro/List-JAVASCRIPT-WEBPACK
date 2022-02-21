import "./styles.css";
import{ Todo, TodoList, createTodoDiv } from "./import-export.js"





const task     = new Todo("Aprender fridooooo");
export const todoList = new TodoList();

todoList.newTodo( task );

task.completed=false;
createTodoDiv(task);

