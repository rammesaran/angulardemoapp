import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { type NewTaskData } from './new-task.model';
import { TaskService } from '../task-services';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string;
  enteredtitle='';
  enteredSummary ='';
  enteredDueDate = '';

  private tasksService = inject(TaskService)

  onCancel(){
this.close.emit();
  }

  oSubmit(){
    console.log("submitted");
 this.tasksService.addTask({
  title: this.enteredtitle,
  summary:this.enteredSummary,
  date: this.enteredDueDate,
  
 }, this.userId);

 this.close.emit();
  }

}
