import { Injectable } from '@angular/core';
import {of} from 'rxjs'
import {Todo} from "../Model/todo"
@Injectable({
  providedIn: 'root'
})
export class FormService {
  todos : Todo[] 
  constructor() {this.todos =[] }

  getTodos(){             // getting all the todos
    return of (this.todos)
  }

  addTodo(todo:Todo){
    console.table(this.todos)
    return this.todos.push(todo);
    
  }

  changeStatusOfTodo(todo:Todo){
    this.todos.map((todoA =>{
      if(todoA.id == todo.id){
        todoA.isCompleted = !todoA.isCompleted;
      }
    }))
  }

  deleteTodo(todo:Todo){
    const index = this.todos.findIndex((currentObj)=>
      currentObj.id=== todo.id
     )
    console.log("index is :", index)
    this.todos.splice(index,1)   //deleting the todo matching with the todo passed from the array

  }
}
