"use strict";
const date = new Date();
console.log(date.toLocaleDateString());
class Car {
    name;
    maxVelocity;
    constructor(name = "noname", maxVelocity = 200) {
        this.name = name;
        this.maxVelocity = maxVelocity;
    }
    info() {
        console.log("this = " + this);
        return `Informacja o samochodzie: ${this.name} mksymalna prędkość: ${this.maxVelocity}`;
    }
    info2 = () => {
        console.log("this2: " + this);
    };
}
;
const c1 = new Car("fiat", 210);
c1.name = "nowa nazwa";
console.log(c1);
console.log(c1.info());
c1.info2();
const cars = [
    new Car(),
    new Car("Mercedes", 300),
    new Car("Ford", 320),
];
console.log("petla in...");
for (let c in cars) {
    console.log(c);
}
console.log("petla of...");
for (let c of cars) {
    console.log(c);
}
console.log("tab.forEach()");
cars.forEach((v, i) => {
    console.log(v, i);
});
for (let k in c1) {
    console.log(k);
}
let k; //w TS
for (k in c1) {
    console.log(c1[k]);
}
const par = document.querySelector("p");
const btn1 = document.querySelector("#btn1");
btn1?.addEventListener("click", (e) => {
    //alert("sdsdsd");
    console.log(par);
    //if(par!=null) 
    par.innerHTML = "ala ma kota";
    //par?.innerHTML = "Ala ma kota";
});
