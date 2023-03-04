import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
send(user: string) {
  this.eventUser.emit(user);
}
  @Input()
  users:Array<string>=[]; //parent to child
  @Output()
  eventUser = new EventEmitter<string>();
}
