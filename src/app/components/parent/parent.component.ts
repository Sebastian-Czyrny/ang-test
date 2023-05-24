import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parentData: string = 'Hello World';

  // handle child event
  childClicked(data: any) {
    console.log(data);
  }
}
