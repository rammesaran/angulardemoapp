import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { type NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredtitle='';
  enteredSummary ='';
  enteredDueDate = '';

  onCancel(){
this.cancel.emit();
  }

  oSubmit(){
    console.log("submitted");
    this.add.emit({
      title: this.enteredtitle,
      summary:this.enteredSummary,
      date:this.enteredDueDate,
    })
  }

}
