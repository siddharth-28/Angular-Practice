import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mod-comp2',
  templateUrl: './mod-comp2.component.html',
  styleUrls: ['./mod-comp2.component.css']
})
export class ModComp2Component implements OnInit {
  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
