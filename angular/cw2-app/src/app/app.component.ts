import { Component } from '@angular/core';
import { Game } from './Game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addGame() {
    
       this.games.push(
        new Game(this.gameTitle,
          this.gamePrice,
          this.gameCategory));
   
      
   
   
  }
  onInputTitle(val: string) {
    this.gameTitle = val;
    console.log(val);
   
  }
  onInputPrice(val: string) {
    this.gamePrice = parseFloat(val);
    console.log(val);
  
  }
  onInputCategory(val: string) {
    this.gameCategory = val;
    console.log(val);
   
  }
  title = 'cw2-app';
  currentDate = new Date().toLocaleDateString();
  //inputGame: Game = new Game("ddd");
  gameTitle:string = ''
  gamePrice:number = 0
  gameCategory:string = ''

  games: Game[] = [
    new Game("Superman 3", 69.99),
    new Game("FIFA 2022", 169.99),
    new Game("Diablo 4", 350),
    new Game("Diablo 55", 350),
  ];
}
