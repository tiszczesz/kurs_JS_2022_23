export const Films = await GetFilms();
async function GetFilms() {
    const res = await fetch('https://swapi.dev/api/films/');
    const films = await res.json();
    return films.results;
}
