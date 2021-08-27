import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User("", "", "", "", "")


  @Output() findUser = new EventEmitter<User>()
  
  createUserAccount(){
    this.findUser.emit(this.user)
    // this.user = new Usere("", "", "", "", "")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
