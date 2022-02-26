import { todoList } from "../index";
import { Todo }     from "../import-export";


//references in HTML
const divTodoList        = document.querySelector('.todo-list');
const placeholderTodo    = document.querySelector('.new-todo');
const buttonDelete       = document.querySelector('.clear-completed');
const ulFilters          = document.querySelector('.filters');
const anchorFilter       = document.querySelectorAll('.filtro');

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
 const div      = document.createElement("div");

 div.innerHTML  = htmlTodo;

 divTodoList.append(div.firstElementChild);

return div.firstElementChild;
}




// Listeners

//if you press ENTER add new TO DO
placeholderTodo.addEventListener('keyup', (event) => {
  
  if(event.keyCode === 13 && placeholderTodo.value.length > 0){
   
    const newTodo = new Todo( placeholderTodo.value );
    todoList.newTodo( newTodo );
    console.log( todoList );
    createTodoDiv( newTodo );
   
    placeholderTodo.value = '';
  }

});

// if you press the input or label the TO DO goes Completed
divTodoList.addEventListener('click', (event) => {  
//console.log('click');
//console.log(event.target.localName);//input, label, button
const elementName = event.target.localName;

const elementLi   = event.target.parentElement.parentElement;
const todoID      = elementLi.getAttribute('data-id');
const input       = event.target.previousElementSibling;

  
if( elementName =='button' ){ 

  todoList.deleteTodo(todoID);
  divTodoList.removeChild(elementLi);

}else {

  if(input != null){ input.checked =! input.checked; }   

  todoList.completedTodo( todoID );
  elementLi.classList.toggle('completed');


}
});


// if you press the 'Borrar completados' all completeds goes deleted
buttonDelete.addEventListener('click', () => {

  //console.log("sin pasar el filtro: ")
  //console.log(todoList);
 todoList.deleteAllCompleted();
  /*console.log("pasado el filtro: ")
  console.log(todoList);*/

 for( let i = divTodoList.children.length-1; i >= 0; i --){

    const element = divTodoList.children[i];

    if (element.classList.contains('completed')){
    
      divTodoList.removeChild(element);
  }
}
  




});

//if you press some button of the bottom you can see the to dos with some filters
ulFilters.addEventListener('click', (event) => {

const filter = event.target.text;

if( !filter ){ return; }
  
anchorFilter.forEach( elem => elem.classList.remove('selected'));
event.target.classList.add( 'selected');



for(const element of divTodoList.children){

element.classList.remove('hidden');

const completed = element.classList.contains('completado');

switch( filter ){

  case 'Pendientes':
      if( completed ){
      element.classList.add('hidden');
      }
      break;

  case 'Completados':
      if( !completed ){
      element.classList.add('hidden');
      }
      break;
}

}



});