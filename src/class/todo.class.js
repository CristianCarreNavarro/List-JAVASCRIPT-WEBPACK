export class Todo {


   static fromLocalStorage({id, task, completed, created}){

        const tempTodo = new Todo( task ) ;
      
        tempTodo.id      = id;
        tempTodo.id      = completed;
        tempTodo.created = created;
      
        return tempTodo;
      
        }

    constructor(task) {

        this.task      = task;
        this.id        = new Date().getTime();
        this.completed = false;
        this.created   = new Date();
    }


}
