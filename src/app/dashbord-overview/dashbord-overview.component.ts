import { Component, OnInit } from '@angular/core';
import { BlackalertService } from '../blackalert.service';
import { User } from '../user';
import { Blackout } from '../blackout';

@Component({
  selector: 'app-dashbord-overview',
  templateUrl: './dashbord-overview.component.html',
  styleUrls: ['./dashbord-overview.component.css']
})
export class DashbordOverviewComponent implements OnInit {

  usersPerBlackout:any
  firstName: String

  constructor(private alertService:BlackalertService) { }  

  findBlackout(blackout:Blackout){

    this.alertService.newBlackoutAlert(true).subscribe(data => {this.usersPerBlackout = data
      console.log(data)})

  }
  
  createNewUser(user: User){
    this.firstName = user.fname
    console.log(this.firstName)

    this.alertService.addUser(user)
  }

  numberOfUsersPerBlackoutId(){
    this.usersPerBlackout = this.alertService.getUsersWithBlackoutId.length
  }
  
  ngOnInit(): void {
  }

}
