export class TodoList {

  constructor() {

    this.todos = [];
  }



  newTodo(todo) {

    this.todos.push(todo);
  }


  deleteTodo(id) {

    
  }

  completedTodo(id){


    for(const todo of this.todos){

      console.log("id: "+id+" id todolist: "+todo.id);

      if(todo.id == id){
        
        todo.completedTodo = !todo.completedTodo;
        break;
      }
    }

  }

  deleteAllCompleted(){


  }
}
