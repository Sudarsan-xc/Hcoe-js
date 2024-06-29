//alert("my name is sudarsan")

/*const person="sudrsan"
console.log(person);
const age = prompt("how old are you?");
console.log(Number(age));
const isValid = confirm("Are you above 18");
console.log(isValid);
*/
//wap top calculate the simple interest and alert interst
/*const p=prompt("what is the principle:");
console.log(Number(p));
const r=prompt("what is the rate:");
console.log(Number(r));
const t=prompt("what is the time:");
console.log(Number(t));
const si=prompt(p*t*r)/100;
console.log(Number(si));
alert(si);
*/
//type conversion
/*const num= String(10)
const num=Number(num);*/

//conditions
// wap to SK GENDER and display
//m=> you are male
//const gender= prompt("enter your gender:");
/*if(gender==="male"){
    alert(`you are ${gender}`);
}
else if(gender==="female"){
    alert(`you are ${gender}`);
}
else{
    alert("6");
}
*/
//const gender= prompt("enter your gender:");
/*gender === "male"
  ? alert("you are male")
  : gender === "female"
  ? alert("you are female")
  : alert("others6");
*/
/*const gender='m';
switch(gender){
    case "m":
    alert("yo are male");
    break;
    case "f":
        alert("yo are male");
        break;
        default:
            alert("yo are other");  
}
            */
//wap to calculate greade
/*const p = prompt("what is the number:");
switch (true) {
  case p > 80:
    alert("you got A");
    break;
  case p < 80 && p >= 60:
    alert("you got B");
    break;
    case p < 60:
    alert("you got B");
    break;
  default:
    alert("fail");
}
*/
//wap to ask usernAME and password
//const name = prompt("what is the name:");
//const username = prompt("what is the username:");
//const password = prompt("what is the password:");
/*if (username === name && password === name) {
  alert("welcome");
} else {
  alert("invalid");
}
*/
//loops
/*
1.for
syntax:
for(begin; condition;steps){
}
2.while
syntax:
let i=0
while(condition){
//
i++
}
3.do while
syntax:
let i=0
do"{
//
i++
}while(condition);
*/
//multiplication table of 12
/*let num = 12;
let i = 1;
while (i <= 10) {
  num1 = num * i;
  i++;
  console.log(num1);
}*/

// wap to add number format
//10000=>10,000 //look onto number

//concate and change cases
//methods
//charcode at
//slice
//to uppercase
//concat

/*const fname = "sudarsan";
const lname = "sharma";
const firstname = fname
  .slice(0, 1)
  .toUpperCase()
  .concat(fname.slice(1, fname.length));
console.log(firstname);

/*function formatNumber(number) {
  return number.toLocaleString("en-US");
}
console.log(formatNumber(10000));
*/
//utility function
//dealing with logics
//deal with array, object
//functions
//wap es6 to sum two number
//function declare
/*const sum = (a, b) => {
  return a + b;
};
//fn execution
const result = sum(110, 200);
console.log(result);

//types of function 
1.default function
const paging(num)=>{
  con}
2. parameterized
3. closure
4. explicit
5. implicit
6.anonymous 
7. inline
8. IIFE

//default
const paging = (num = 5) => {
  console.log(num);
};
paging(1);
paging();
//closure (important)
const pw=(){
}
8. IIFE
(() => {
  console.log("hello");
})();
//4. explicit function
const sum =(a,b)=>{
  return a+b;
  }
  //5. implicit function
const sum =(a,b)=>a+b
//reverse a string
const reve = (num) => num.toString().split("").reverse().join("");
console.log(reve(32243));

//wap to accept string and count no of vowels exclude y

const vowels
const str = (name) => name.split("").length;
console.log(str("the quick brown fox"));
console.log(str2("a,e,i,o,u"));

// wap to convert tempr to 'C' to to fahrenheit
const temprconv = (temp, given = "C") => {
  if (given != "C") {
    given = ((given - 32) / 9) * 5;
    return given;
  } else return given;
};
console.log(temprconv(100, ""));
*/
//objects
