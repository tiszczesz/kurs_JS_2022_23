console.log("Hello from TS");
var a = 12;
var napis = "12";
console.log("a= ".concat(a, " b = ").concat(napis));
//a = "ala ma kota"; eeror w TS
var t1 = ["ala", "bela", "cela"];
t1.push("23");
console.log(t1);
t1.forEach(function (elem) { console.log(elem.length); });
var isOK = false;
if (isOK) {
    console.log("To jest OK");
}
else {
    console.log("Nie jest OK");
}
