import "./styles.css";
import{ Todo, TodoList, createTodoDiv } from "./import-export.js"

/*const task             = new Todo("todo 1");
const task2            = new Todo("todo 2");
const task3            = new Todo("todo 3");
const task4            = new Todo("todo 4");*/

export const todoList = new TodoList();

todoList.todos.forEach( createTodoDiv ) ;

/*todoList.newTodo( task);
todoList.newTodo( task2);
todoList.newTodo( task3);
todoList.newTodo( task4);


createTodoDiv(task);
createTodoDiv(task2);
createTodoDiv(task3);
createTodoDiv(task4);*/