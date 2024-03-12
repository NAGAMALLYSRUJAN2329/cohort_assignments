/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todoList=[];
  }
  add(todo){
    this.todoList.push(todo);
  }
  remove(idx){
    this.todoList.splice(idx,1);
  }
  get(idx){
    if(idx>=this.todoList.length){
      return null;
    }
    return this.todoList[idx];
  }
  getAll(){
    return this.todoList;
  }
  clear(){
    this.todoList=[]
    return this.todoList;
  }
  update(idx, updatedTodo){
    if(idx<this.todoList.length){
      this.todoList[idx]=updatedTodo;
    }
  }
}

module.exports = Todo;
