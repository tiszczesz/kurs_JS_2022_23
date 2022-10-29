console.log("Hello from TS");
let a:number = 12;
const napis:string = "12";
console.log(`a= ${a} b = ${napis}`);
//a = "ala ma kota"; error w TS
const t1 = ["ala","bela","cela"];
t1.push("23");
console.log(t1);
t1.forEach((elem)=>{console.log(elem.length)});
let isOK:boolean = false;
if(isOK){
    console.log("To jest OK");    
}else{
    console.log("Nie jest OK");    
}

