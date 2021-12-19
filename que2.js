console.log("Hello");

var click = 0; 
function getId(btn)
{  
  
    updateCount(btn); 
}


var laForce = localStorage.getItem("laForce", laForce);
var laLuna= localStorage.getItem("laLuna", laLuna);
var lImperatrice= localStorage.getItem("lImperatrice", lImperatrice);
var lamoureux= localStorage.getItem("lamoureux", lamoureux);
var leMonde= localStorage.getItem("leMonde", leMonde);
var lEtoile= localStorage.getItem("lEtoile", lEtoile); 

laLuna = parseInt(laLuna);
laForce = parseInt(laForce);
lImperatrice = parseInt(lImperatrice);
lamoureux = parseInt(lamoureux);
leMonde = parseInt(leMonde);
lEtoile = parseInt(lEtoile);

function updateCount(btn){
  // //question 2
  if(btn.id == 122){
    laForce = laForce + 1; 
    lImperatrice = lImperatrice + 1;
    lEtoile = lEtoile + 1;

}
else if(btn.id == 22){
    laLuna = laLuna + 1;
    lamoureux = lamoureux + 1;
    leMonde = leMonde + 1;
}

localStorage.setItem("laLuna", laLuna);
    localStorage.setItem("lamoureux", lamoureux);
    localStorage.setItem("leMonde", leMonde);
    localStorage.setItem("lEtoile", lEtoile);
    localStorage.setItem("lImperatrice", lImperatrice);
    localStorage.setItem("laForce", laForce);

    console.log(localStorage.getItem("lImperatrice", lImperatrice));
    console.log("lImperatrice");
    console.log(lImperatrice);
    console.log("lamoureux");
    console.log(lamoureux);
    console.log("leMonde");
    console.log(leMonde);
    console.log("lEtoile");
    console.log(lEtoile);
    console.log("laForce");
    console.log(laForce);
    console.log("laLuna");
console.log(laLuna);
}

