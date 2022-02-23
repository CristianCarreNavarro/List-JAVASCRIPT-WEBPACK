export class TodoList {

  constructor() {

    this.todos = [];
  }



  newTodo(todo) {

    this.todos.push(todo);

  }


  deleteTodo(id) {
    
    this.todos = this.todos.filter( todo => todo.id !=id)


    
  }

  completedTodo(id){


    for(const todo of this.todos){

      console.log(id, todo.id)
      console.log(todo);
      if(todo.id == id){

        
        //si es true se convierte a false
        todo.completed = !todo.completed;
        
        console.log("for despues: " )
        console.log(this.todos);
        break;

      }
    }

  }

  deleteAllCompleted(){
    
    
    this.todos = this.todos.filter( todo => !todo.completed )
   console.log("deleteAllCompleted")
    console.log(this.todos);
  }
}
