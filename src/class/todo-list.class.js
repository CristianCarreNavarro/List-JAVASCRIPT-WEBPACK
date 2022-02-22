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

      if(todo.id == id){
        
        todo.completedTodo = !todo.completedTodo;
        break;

      }
    }

  }

  deleteAllCompleted(){

    this.todos = this.todos.filter( todo => !todo.completed )

  }
}
