import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomindex = Math.floor(Math.random()* DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  

  selectedUser = DUMMY_USERS[randomindex];

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser(){

    console.log("click");
    const randomindex = Math.floor(Math.random()* DUMMY_USERS.length);

    this.selectedUser = DUMMY_USERS[randomindex];
  }

}
