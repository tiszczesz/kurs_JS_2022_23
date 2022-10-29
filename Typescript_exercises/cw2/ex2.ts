const addJS = (a,b) => {
    return a+b;
}
const addTS = (a:number,b:number):number => {
    return a+b;
}
console.log(addJS(12,7));
console.log(addJS("12",7));
console.log(addTS(12,7));
console.log(addTS(12,7));

function divide(a:number,b:number):number {
    if(b===0) throw Error("dzielenie przez zero!!!");
    return a/b;
}
try{
    console.log(divide(12,0)+25);
}catch(error){
    console.log(error.message);    
}


