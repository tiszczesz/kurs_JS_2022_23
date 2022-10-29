"use strict";
class Person {
    firstname;
    lastname;
    birthDate;
    constructor(firstname, lastname, birthDate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
    }
    info() {
        const age = new Date().getFullYear() - new Date(this.birthDate).getFullYear();
        return `Informacje o osobie: ${this.firstname} ${this.lastname} wiek: ${age}`;
    }
}
const persons = [];
document.querySelector("input[type=button]")?.addEventListener("click", (e) => {
    // alert(e.target);
    const firstname = document.querySelector("#imie").value;
    const lastname = document.querySelector("#nazwisko").value;
    const birtDate = document.querySelector("#date").value;
    //bez walidacji
    persons.push(new Person(firstname, lastname, birtDate));
    const result = document.querySelector("#result");
    generList(persons, result);
    // console.log(p1);
    // document.querySelector("#result")!.innerHTML = p1.info();
});
const generList = (dane, element) => {
    //utworzenie li z elementow tablicy
    element.innerHTML = "";
    const lista = document.createElement("ol");
    //dodanie do element całej listy
    dane.forEach((person) => {
        const li = document.createElement("li");
        li.innerHTML = person.info();
        lista.appendChild(li);
    });
    element.appendChild(lista);
};
