class Person{
    firstname:string;
    lastname:string;
    birthDate:string;
    constructor(firstname:string,lastname:string,birthDate:string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
    }
    info():string {
        const age:number = new Date().getFullYear()-new Date(this.birthDate).getFullYear();
        return `<p>Informacje o osobie: ${this.firstname} ${this.lastname} wiek: ${age}</p>`;
    }
}
const persons:Person[] = [];
document.querySelector("input[type=button]")?.addEventListener("click", (e) => {
    alert(e.target);
    const firstname = (document.querySelector("#imie") as HTMLInputElement).value;
    const lastname = (document.querySelector("#nazwisko") as HTMLInputElement).value;
    const birtDate = (document.querySelector("#date") as HTMLInputElement).value;
    //bez walidacji
    persons.push(new Person(firstname,lastname,birtDate));
    const result = document.querySelector("#result") as HTMLElement;
    generList(persons,result);
    // console.log(p1);
    // document.querySelector("#result")!.innerHTML = p1.info();
});
const generList = (dane:Person[],element:HTMLElement):void => {

}

