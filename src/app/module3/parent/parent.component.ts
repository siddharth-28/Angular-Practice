import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
parentMessage: string;
onClick(parentMessage: string) {
  this.parentMessage = parentMessage;

}
  constructor() { }

}
