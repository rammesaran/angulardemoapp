import { Component, Input } from '@angular/core';
import { TagComponent } from "./tag/tag.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './new-task/new-task.model';

import { TaskService } from './task-services';

@Component({
  selector: 'app-task',
  imports: [TagComponent, NewTaskComponent],
    standalone:true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true}) nameData?: string
@Input({required: true}) userId!: string
isAddingTask = false;
//dependecy injection
constructor(private taskService: TaskService){
}


get selectedUserTask(){
  return this.taskService.getUserTask(this.userId);
}
onCompleteTask(id:string){
}
onStartAddTask(){
  console.log("called");
  this.isAddingTask = true;
}

onCloseAddTask(){
  this.isAddingTask = false;
}



}

