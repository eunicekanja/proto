import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  today:number=Date.now();
  todoArray:[string,string,boolean][]=[];
  todo!: string;
  time!: string;
  isComplete=false;
  constructor() { }

  ngOnInit(): void {
  }
  addTodo(todo:string,time:string){
    this.todo=todo;
    this.time=time;
    if(!todo || !time) return
    this.todoArray.push([this.todo,this.time,this.isComplete])
  }

}
