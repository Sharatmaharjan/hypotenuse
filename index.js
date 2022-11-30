// let firstName="sharat";
// let lastName="maharjan";
// let age=28;
// let student=false;
// console.log("Hello", firstName, lastName);
// console.log("you're",age,"years old.");
// console.log("Enrolled:",student);
// document.getElementById("p1").innerHTML = "Hello " + firstName
// document.getElementById("p2").innerHTML = "You're "+ age +" years old."
// document.getElementById("p3").innerHTML = "Enrolled: "+ student;
// let fname=window.prompt("What's your name?");
// document.getElementById("p1").innerHTML = "hello " + fname;
// let username;
// document.getElementById("myButton").onclick = function(){
//     username=document.getElementById("myText").value;
//     //console.log("hello ",username)
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }
let a,b,c;
// a=window.prompt("Enter base:");
// b=window.prompt("Enter perpendicular:");
//c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
//console.log(c);
document.getElementById("3").onclick = function(){
    a=document.getElementById("1").value;
    b=document.getElementById("2").value;
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("4").innerHTML= "Answer = "+c;
}

