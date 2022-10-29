var addJS = function (a, b) {
    return a + b;
};
var addTS = function (a, b) {
    return a + b;
};
console.log(addJS(12, 7));
console.log(addJS("12", 7));
console.log(addTS(12, 7));
console.log(addTS(12, 7));
function divide(a, b) {
    if (b === 0)
        throw Error("dzielenie przez zero!!!");
    return a / b;
}
try {
    console.log(divide(12, 0) + 25);
}
catch (error) {
    console.log(error.message);
}
