export const Films:Array<FilmInfo> =  await GetFilms();

export interface FilmInfo{
    title:string,
    opening_crawl:string,
    created:string,
    director:string,
    edited:string,
    episode_id:number,
    release_date:Date
}

async function GetFilms() {
    const res = await fetch('https://swapi.dev/api/films/');
    const films = await res.json();
    return films.results;
}