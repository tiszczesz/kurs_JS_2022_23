export const Films = await GetFilms();
export const People = await GetPeople();
async function GetFilms() {
    const res = await fetch('https://swapi.dev/api/films/');
    const films = await res.json();
    return films.results;
}
async function GetPeople() {
    const res = await fetch('https://swapi.dev/api/people/');
    const people = await res.json();
    return people;
}
