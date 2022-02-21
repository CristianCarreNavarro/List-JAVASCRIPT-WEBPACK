import { todoList } from "../index";
import { Todo } from "../import-export";


//references in HTML
const divTodoList = document.querySelector('.todo-list');
const placeholderTodo = document.querySelector('.new-todo');




export const createTodoDiv = ( todo ) => {
  
const htmlTodo =`
<li class= "${ (todo.completed) ? 'completed' : '' }" data-id="${(todo.id)}">
<div class="view">
  <input class="toggle" type="checkbox" ${(todo.completed)? "checked" : '' }>
  <label>${ todo.task } </label>
  <button class="destroy"></button>
</div>
<input class="edit" value="Create a TodoMVC template">
</li>
`
const div = document.createElement("div");
div.innerHTML=htmlTodo;
divTodoList.append(div.firstElementChild);

return div.firstElementChild;
}

// events
placeholderTodo.addEventListener('keyup', (event) => {
  
  if(event.keyCode === 13 && placeholderTodo.value.length > 0){
   
    const newTodo = new Todo( placeholderTodo.value );
    todoList.newTodo( newTodo );
    console.log( todoList );
    createTodoDiv( newTodo );
   
    placeholderTodo.value = '';
  }

});