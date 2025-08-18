import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

interface Task{
  id:string,
  userId:string,
  title:string,
  summary:string,
  dueDate:string
}

@Component({
  selector: 'app-tag',
  imports: [CardComponent,DatePipe],
  standalone:true,
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
@Input({required:true}) task!: Task;
@Output() complete = new EventEmitter<string>();




onCompleteTask(){
  this.complete.emit(this.task.id);
}



}
