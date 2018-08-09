import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mod6-comp2',
  templateUrl: './mod6-comp2.component.html',
  styleUrls: ['./mod6-comp2.component.css']
})
export class Mod6Comp2Component  {

  message = 'Hi shivam';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}


