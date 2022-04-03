import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Model/todo"
import {v4 as uuidv4} from 'uuid'
import {FormService} from '../../services/form.service'
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
    todoTitle : string=" ";

  constructor(private todoService : FormService, private toastr : ToastrService) { 
  }
  
  ngOnInit(): void {
  }

  handleAddTodo(){
    
    if(this.todoTitle==" "){
      this.toastr.error("Enter a title")
    } else{
      const newTodo : Todo ={
        id :uuidv4() ,
        title : this.todoTitle,
        date : new Date(),
        isCompleted : false
  
      }
      this.toastr.success("Successfully added")
      this.todoService.addTodo(newTodo);
      this.todoTitle = " ";
    }
    
  }

}
