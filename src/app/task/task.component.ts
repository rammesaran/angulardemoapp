import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
    standalone:true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() nameData?: string




}

