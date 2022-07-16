const max= Math.max(0, 150, 30, 20, -8, -200);

document.getElementById("max").innerHTML=max;
const min=Math.min(0, 150, 30, 20, -8, -200);
document.getElementById("min").innerHTML=min;

const random=Math.floor(Math.random()*101);
document.getElementById("random").innerHTML=random;