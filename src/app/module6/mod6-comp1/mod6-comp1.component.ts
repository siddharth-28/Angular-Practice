import { Component } from '@angular/core';

@Component({
  selector: 'app-mod6-comp1',
  templateUrl: './mod6-comp1.component.html',
  styleUrls: ['./mod6-comp1.component.css']
})
export class Mod6Comp1Component  {

  constructor() { }

  Pmessage: string;

  receiveMessage($event) {
    this.Pmessage = $event;
  }

}
