import { Game ,games } from "./data.js";

document.querySelector("#load")?.addEventListener("click",(e)=>{
    CreateTable(games);
});

document.querySelector("#addForm")?.addEventListener("click",(e)=>{
    console.log("ddd");
    document.querySelector("#form")!.className = "visible";  
});
document.querySelector("form")?.addEventListener("submit",(e)=>{
    e.preventDefault();
    return false;
});
document.querySelector("#addToTable")?.addEventListener("click",()=>{
    const title = (document.querySelector("#title") as HTMLInputElement).value;
    const price = parseFloat((document.querySelector("#price") as HTMLInputElement).value);
    const category = (document.querySelector("#category") as HTMLInputElement).value;
    if(title.trim()=="" || category.trim()=="" || isNaN(price)){
        alert("Błędne dane!!");
        return;
    }
    const newGame = new Game(title,price,category);
    games.push(newGame);
    CreateTable(games);
});
function CreateTable(games:Game[]):void {
    let html = "<table class='table table-striped'>";
    html += "<tr><th>Tytuł</th><th>Cena</th><th>Kategoria</th></tr>"
    games.forEach((elem,i)=>{
        html += `<tr>
            <td>${elem.Title}</td>
            <td>${elem.Price}</td>
            <td>${elem.Category}</td>
            </tr>`;
    });
    document.querySelector("#dane")!.innerHTML = html+"</table>";
}