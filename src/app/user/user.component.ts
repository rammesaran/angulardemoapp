import { Component,computed,EventEmitter,Input,Output,output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";

type User ={
  id: string,
  avatar: string,
  name:string,
}





@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  

// @Input() avatar?: string;
// @Input({ required: true}) name!: string;
// @Input({required: true}) id!:string;

@Input({required: true}) selected!: boolean;

@Input({required: true}) user!:User

@Output() select = new EventEmitter<string>();





get imagePath(){
  return 'assets/users/' +this.user.avatar;
}
onSelectUser(){
this.select.emit(this.user.id);
}

}
