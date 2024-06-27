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
const name = prompt("what is the name:");
const username = prompt("what is the username:");
const password = prompt("what is the password:");
if (username === name && password === name) {
  alert("welcome");
} else {
  alert("invalid");
}
