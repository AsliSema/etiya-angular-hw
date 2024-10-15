import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todo!: string;
  todoList: string[] = ["Morning Stand-Up Meeting", "Complete Article on Denormalization", "Fix Podman Database Connection"];


  add(){
    if(this.todoList.includes(this.todo.trim())){
      alert("This is already exist!")
    }else{
      this.todoList.push(this.todo.trim())
      this.todo = " "
    }
  }

  delete(index: number){
    this.todoList.splice(index, 1)
  }




}
