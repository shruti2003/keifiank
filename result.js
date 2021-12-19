var laForce = localStorage.getItem("laForce", laForce);
var laLuna= localStorage.getItem("laLuna", laLuna);
var lImperatrice= localStorage.getItem("lImperatrice", lImperatrice);
var lamoureux= localStorage.getItem("lamoureux", lamoureux);
var leMonde= localStorage.getItem("leMonde", leMonde);
var lEtoile= localStorage.getItem("lEtoile", lEtoile); 


var max = 0; 
var choice = "";

if(laForce > max){
    max = laForce;
    choice = "La Force"; 
}
 if(laLuna > max){
     max = laLuna; 
     choice = "La Luna";
 }
 if(lImperatrice > max){
    max = lImperatrice; 
    choice = "L' Imperatice"
}
if(lamoureux > max){
    max = lamoureux; 
    choice = "Lamoureux";
}
if(leMonde > max){
    max = leMonde; 
    choice = "Le Monde";
}
if(lEtoile > max){
    max = lEtoile; 
    choice = "L' Etoile"
}
console.log(choice);

console.log(max);
console.log(choice);