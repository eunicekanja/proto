import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() TodoArray:any=[]
  isComplete=false;
  constructor() { }

  ngOnInit(): void {
  }
  complete(i:number){
    this.TodoArray[i][2]=true;
    //this.TodoArray[i].isComplete=true;
  }
  deleteItem(i:number){
    this.TodoArray.splice(i,1)
  }
}
