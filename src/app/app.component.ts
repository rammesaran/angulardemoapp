import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoapp';

users = DUMMY_USERS;
selectedName = "";
onSelectUser(id:string){
console.log("selected user id is" +id);



 let founduser = DUMMY_USERS.find(user => user.id ==id);
 console.log(founduser);
 this.selectedName = founduser!.name;
 console.log( this.selectedName);
}
}
