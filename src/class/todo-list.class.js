import { Todo } from "./todo.class";

export class TodoList {

 constructor() {

  this.loadLocalStorage();

  }


  newTodo( todo ) {

    this.todos.push( todo );

    this.saveLocalStorage();

  }

  deleteTodo( id ) {
    
    this.todos = this.todos.filter( todo => todo.id !=id)

    this.saveLocalStorage();
    
  }

  completedTodo( id ){


    for(const todo of this.todos){

      console.log("completedTodo" + todo.id +" = "+ id);

      if(todo.id == id){
        
       
        //si es true se convierte a false
        todo.completed = !todo.completed;

        this.saveLocalStorage();
        break;

      }
    }

  }

  deleteAllCompleted(){  
    
  this.todos = this.todos.filter( todo => !todo.completed )
  this.saveLocalStorage();

  }

  saveLocalStorage(){
console.log("hola")
   localStorage.setItem('todo', JSON.stringify( this.todos ) );

console.log(this.todos);  
  }

  loadLocalStorage(){

   this.todos = (localStorage.getItem('todo')) 
              ? JSON.parse(localStorage.getItem('todo')) 
              : [];

          
   //to convert the Objects to todos because the JSON.parse load like and Object
   this.todos = this.todos.map( Todo.fromObjectTotoDO );

   

  }

}
