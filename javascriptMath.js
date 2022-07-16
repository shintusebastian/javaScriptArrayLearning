const max= Math.max(0, 150, 30, 20, -8, -200);

document.getElementById("max").innerHTML=max;
const min=Math.min(0, 150, 30, 20, -8, -200);
document.getElementById("min").innerHTML=min;

//create a random number from 0-100
const random=Math.floor(Math.random()*101);
document.getElementById("random").innerHTML=random;

//create a random number from 1-100
const random1to100=Math.floor((Math.random()*100)+1);
document.getElementById("random1to100").innerHTML=random1to100;