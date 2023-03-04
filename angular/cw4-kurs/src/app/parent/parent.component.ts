import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
showUser(user: string) {
  console.log(user);  
}
  myUsers: string[] = ["aladyn","franek","user2","inny"];

}
