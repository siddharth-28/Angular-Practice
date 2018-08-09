import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 Message: string;
 onClick(parentMessage: string) {
   this.Message = parentMessage;
 }
  constructor() { }

  ngOnInit() {
  }

}
