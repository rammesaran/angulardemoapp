import { Component, Input } from '@angular/core';
import { TagComponent } from "./tag/tag.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './new-task/new-task.model';



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
tasks =[
  {
    id:'t1',
    title: "angular learning",
    userId: 'u1',
    summary: "basics of learning",
    dueDate:'2023-12-2',
  },
    {
    id:'t2',
    title: "python learning",
    userId: 'u2',
    summary: "basics of learning",
    dueDate:'2023-12-2',
  },
    {
    id:'t3',
    title: "react learning",
    userId: 'u3',
    summary: "basics of learning",
    dueDate:'2023-12-2',
  },
]


get selectedUserTask(){
  return this.tasks.filter((task)=> task.userId ===this.userId);
}
onCompleteTask(id:string){
  this.tasks = this.tasks.filter((taskdata) => taskdata.id !==id);
}
onStartAddTask(){
  console.log("called");
  this.isAddingTask = true;
}

onCancelTask(){
  this.isAddingTask = false;
}

onAddTask(taskData:NewTaskData){
this.tasks.unshift({id: new Date().getTime().toString(),title: taskData.title,summary: taskData.summary,dueDate: taskData.date,userId:this.userId})
this.isAddingTask =false;
}

}

