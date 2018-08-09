import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mod6-comp3',
  templateUrl: './mod6-comp3.component.html',
  styleUrls: ['./mod6-comp3.component.css']
})
export class Mod6Comp3Component implements OnInit {
  @Input() childMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
