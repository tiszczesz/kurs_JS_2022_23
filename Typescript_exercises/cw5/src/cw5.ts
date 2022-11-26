import { Films, FilmInfo } from "./dane.js";

console.log(Films);
console.log(Films[0]);
console.log(Films[0].release_date);
console.log(Films[0].opening_crawl);
const root = document.querySelector("#root");
if(root !=null){
    root.innerHTML = getAll(Films);
}

function getAll(Films:Array<FilmInfo>):string{
    let html = "<div class='myFlex'>";
    Films.forEach((e,i)=>{
        html += generCard(e);
    });
    return html + "</div>";
}

function generCard(film: FilmInfo): string {
    let html = `<div class="card"  >
    <div class="card-body">
      <h5 class="card-title" style='{color:green;font-weight:bold}'>${film.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${film.director}</h6>
      <p class="card-text">${film.opening_crawl}</p>
      <div class="card-footer text-muted">
            Date: ${film.release_date}
     </div>
    </div>
  </div>`;
    return html;
}