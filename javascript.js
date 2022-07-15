// const cars= new Array["BMW","AUDI","FORD"];
const cars=["BMW","AUDI","FORD"];
document.getElementById("car").innerHTML=cars;

const numbers=[34, 53, 46, 78, 89,100];
let result="";
 numbers.forEach(myFunction);
 document.getElementById("demo").innerHTML=result;
 
 function myFunction(value){
    result+="<br>"+ value+"</br>";
 }
const result1=numbers.map(myFunction1);
document.getElementById("map").innerHTML=result1;

 function myFunction1(value){
return value*10;
 }


 const numOver50= numbers.filter(myFilter);
 document.getElementById("over50").innerHTML=numOver50;
 function myFilter(value){
return value>50;
 }
let total="";

const sum= numbers.reduce(myReduce);
document.getElementById("sum").innerHTML=sum;
function myReduce(total,value){
    return total+value;
}
//every method returns true if all the elements satisfy a given condition
const everyOver50=numbers.every(myEvery);
document.getElementById("every").innerHTML=everyOver50;

function myEvery(value){
    return value>50;
}
//some returns true if there are some elements which satisfies the given conditions
const some50=numbers.some(mySome);
document.getElementById("some").innerHTML=some50;

function mySome(value){
    return value>50;
}

//The find() method returns the value of the first array element that passes a test function.
let found=numbers.find(myFind);
document.getElementById("find").innerHTML=found;

function myFind(value){
    return value >70 && value < 90;
}

//The findIndex() method returns the index of the first array element that passes a test function.
let foundIndex=numbers.findIndex(myFindIndex);
document.getElementById("findIndex").innerHTML=foundIndex;

function myFindIndex(value){
    return value >70 && value < 90;
}

//The entries() method returns an Array Iterator object with key/value pairs
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("entry").innerHTML += x + "<br>";
}

//Array.includes() allows us to check if an element is present in an array (including NaN, unlike indexOf)

document.getElementById("include").innerHTML=fruits.includes("Mango");

//const number; will show error. const variables should be initialized in javascript.
var carList=["BMw ", "AUdi"];
