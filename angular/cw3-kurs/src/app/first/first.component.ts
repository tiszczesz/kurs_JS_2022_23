import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
change(event:Event) {
  this.choice = (event.target as HTMLInputElement).value;
}

  currentTime: string = new Date().toLocaleTimeString();
  valueFromInput:string="";
  red:number=100;
  green:number=100;
  blue:number=100;
  choice: string="";
  

  constructor() {
    this.updateTime();
  }
  updateTime() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  } 
  run(event: Event) {
    (event.target as HTMLInputElement).value = this.currentTime;
  }
}
