import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mod-comp3',
  templateUrl: './mod-comp3.component.html',
  styleUrls: ['./mod-comp3.component.css']
})
export class ModComp3Component implements OnInit {
@Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
