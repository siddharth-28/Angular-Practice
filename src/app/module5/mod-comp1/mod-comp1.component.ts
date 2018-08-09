import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-comp1',
  templateUrl: './mod-comp1.component.html',
  styleUrls: ['./mod-comp1.component.css']
})
export class ModComp1Component implements OnInit {
parentMessage: string;
onClick(parentMessage: string) {
  this.parentMessage = parentMessage;
}
  constructor() { }

  ngOnInit() {
  }

}
