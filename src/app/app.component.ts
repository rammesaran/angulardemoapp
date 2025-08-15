import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
import { TagComponent } from './task/tag/tag.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, UserComponent,TaskComponent,TagComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoapp';

users = DUMMY_USERS;
selectedUserId?: string;

get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId);
}

onSelectUser(id:string){

this.selectedUserId = id;

}
}
