export class Game{
    constructor(public Title:string,public Price:number,public Category:string){
    }
    toRowTab():string{
        return `<tr>
            <td>${this.Title}</td>
            <td>${this.Price}</td>
            <td>${this.Category}</td>
             </tr>`;
    }
}
export const games = [
    new Game("Wiedźmin 3",100,"RPG"),
    new Game("Diablo 3",70,"RPG"),
    new Game("Superman 3",65,"FPS"),
    new Game("Franek na wakacjach",78,"FPS")
];