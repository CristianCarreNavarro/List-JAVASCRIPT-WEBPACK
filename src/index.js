import "./styles.css";
import{ TodoList, createTodoDiv } from "./import-export.js"



export const todoList = new TodoList();

todoList.todos.forEach( createTodoDiv ) ;

