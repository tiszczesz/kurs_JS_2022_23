export class Game {
    title: string;
    price: number;
    category: string;
    constructor(title: string, price: number = 99.9, category: string = "RPG") {
        this.title = title;
        this.price = price;
        this.category = category
    }
    getInfo():string{
        return `Tytuł: <span class='info'>${this.title} </span>
        cena: <span class='info'>${this.price}</span> PLN 
        kategoria: <span class='info'>${this.category}</span>`;
    }
}