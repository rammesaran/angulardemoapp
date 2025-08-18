import { Injectable } from "@angular/core";
import { NewTaskData } from "./new-task/new-task.model";


@Injectable({providedIn: 'root'})
export class TaskService{
   private tasks =[
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
    ];

getUserTask(userId:string){
      return this.tasks.filter((task)=> task.userId ===userId);

}

addTask(taskData: NewTaskData, userId: string){
this.tasks.unshift({id: new Date().getTime().toString(),title: taskData.title,summary: taskData.summary,dueDate: taskData.date,userId:userId})
this.saveTasks();
}

removeTask(id:string){
      this.tasks = this.tasks.filter((taskdata) => taskdata.id !==id);

}

private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
        this.tasks = JSON.parse(tasks) ;
    }
}
}