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
        return `<p>Informacje o osobie: ${this.firstname} ${this.lastname} wiek: ${age}</p>`;
    }
}
document.querySelector("input[type=button]")?.addEventListener("click", (e) => {
    alert(e.target);
    const firstname = document.querySelector("#imie").value;
    const lastname = document.querySelector("#nazwisko").value;
    const birtDate = document.querySelector("#date").value;
    //bez walidacji
    const p1 = new Person(firstname, lastname, birtDate);
    console.log(p1);
    document.querySelector("#result").innerHTML = p1.info();
});
