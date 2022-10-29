class Person {
    firstname: string;
    lastname: string;
    birthDate: string;
    constructor(firstname: string, lastname: string, birthDate: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
    }
    info(): string {
        const age: number = new Date().getFullYear() - new Date(this.birthDate).getFullYear();
        return `Informacje o osobie: ${this.firstname} ${this.lastname} wiek: ${age}`;
    }
}
const persons: Person[] = [];
document.querySelector("input[type=button]")?.addEventListener("click", (e) => {
   // alert(e.target);
    const firstname = (document.querySelector("#imie") as HTMLInputElement).value;
    const lastname = (document.querySelector("#nazwisko") as HTMLInputElement).value;
    const birtDate = (document.querySelector("#date") as HTMLInputElement).value;
    //bez walidacji
    persons.push(new Person(firstname, lastname, birtDate));
    const result = document.querySelector("#result") as HTMLElement;
    generList(persons, result);
    // console.log(p1);
    // document.querySelector("#result")!.innerHTML = p1.info();
});
const generList = (dane: Person[], element: HTMLElement): void => {
    //utworzenie li z elementow tablicy
    element.innerHTML = "";
    const lista = document.createElement("ol");
    //dodanie do element całej listy
    dane.forEach((person: Person) => {
        const li = document.createElement("li");
        li.innerHTML = person.info();
        lista.appendChild(li);
    });
    element.appendChild(lista);
}

