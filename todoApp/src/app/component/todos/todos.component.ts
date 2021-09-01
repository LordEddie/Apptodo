import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
inputTodo:string="";
todos: Todo[]=[
  new Todo('Fist ELement',false),
  new Todo('Need to Complete Angular Projects',false),
  new Todo('Need to Start Ionic this week',false)
];

toggleDone (id:number){
  this.todos.map((v,i)=>{
    if(i==id) v.completed=!v.completed;

    return v;
  })
}
deleteTodo(id:number){
this.todos=this.todos.filter((v,i) => i!==id);
}
addTodo(){
  this.todos.push({
    content:this.inputTodo,
    completed:false
  });
  this.inputTodo="";
}
  constructor() { }

  ngOnInit(): void {
  
  }

}
