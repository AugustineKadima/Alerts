import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blackout } from '../blackout';

@Component({
  selector: 'app-create-alert',
  templateUrl: './create-alert.component.html',
  styleUrls: ['./create-alert.component.css']
})
export class CreateAlertComponent implements OnInit {

  @Output() blackoutStatus = new EventEmitter<Blackout> () 
  blackout: Blackout = new Blackout(true)

  createBlackoutAlert(){
    this.blackoutStatus.emit(this.blackout)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
