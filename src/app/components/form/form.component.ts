import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service'
import {Todo} from '../../Model/todo'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  todos : Todo[]
  constructor(private todoService : FormService) { }

  ngOnInit(): void {
        this.todoService.getTodos().subscribe(todos =>
        this.todos = todos)
  }

  deleteTodo(todo : Todo){
    this.todoService.deleteTodo(todo)
  }

  changeStatusOfTodo(todo :Todo){
    this.todoService.changeStatusOfTodo(todo)
  }


}
