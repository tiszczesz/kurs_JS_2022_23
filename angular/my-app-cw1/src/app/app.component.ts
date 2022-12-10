import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pierwsza aplikacja Angular';
  users = [
    {firstname:"Adam",lastname:"Nowak",klasa:"1TIP"},
    {firstname:"Monika",lastname:"Nowacka",klasa:"3TIP"},
    {firstname:"Grażyna",lastname:"Nowak",klasa:"1B"},
    {firstname:"Ryszard",lastname:"Nowak",klasa:"1C"},
    {firstname:"Tomasz",lastname:"Gocki",klasa:"3TIP"},
    {firstname:"Roman",lastname:"Kowalski",klasa:"4TIP"},
    {firstname:"Adrian",lastname:"Słomiński",klasa:"2TIP"},
    {firstname:"Adrian",lastname:"Słomiński",klasa:"2TIP"},
    {firstname:"Adrian",lastname:"Słomiński",klasa:"2TIP"},
  ]
}
