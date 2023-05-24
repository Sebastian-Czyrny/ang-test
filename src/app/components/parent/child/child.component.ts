import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() data!: string;
  @Output() onChildClicked: EventEmitter<any> = new EventEmitter();

  //example output event handler
  buttonClicked() {
    console.log(1);
    this.onChildClicked.emit('some data');
  }
}
