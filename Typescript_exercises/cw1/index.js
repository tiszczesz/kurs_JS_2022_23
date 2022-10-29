// console.log("Hello from NodeJs");
// const a = 12;
// const Book = {
//     title: "ABC czegoś",
//     author: "Roman Boman",
//     price: 45.90
// };
// console.log("a = "+a);
// console.log(Book);
// //alert("dddd");
// console.log(this);

$(function(){
    const run = $("#run");
    const run2 = document.querySelector("#run");
    console.log(run);
    $(run).on("click",(e)=>{e.target.innerHTML = "Po klinięciu..."})
    console.log(run2);
    document.querySelector("#timer").innerHTML = new Date().toLocaleDateString();
});