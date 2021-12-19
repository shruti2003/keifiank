console.log("Hello");

var click = 0; 
function getId(btn)
{  
    updateCount(btn); 
}

//not working for que3 but works for que2

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

console.log(lImperatrice);


function updateCount(btn){
//question 4
    if(btn.id == 14){
        laForce = laForce + 2; 
        lImperatrice = lImperatrice + 2;
        leMonde = leMonde + 2;
    }
    else if(btn.id == 24){
        laLuna = laLuna + 2;
        lamoureux = lamoureux + 2;
    }
    else if(btn.id == 34){
        lEtoile = lEtoile + 2;
        lamoureux = lamoureux + 2;
        leMonde = leMonde + 2;
    }

localStorage.setItem("laLuna", laLuna);
localStorage.setItem("lamoureux", lamoureux);
localStorage.setItem("leMonde", leMonde);
localStorage.setItem("lEtoile", lEtoile);
localStorage.setItem("lImperatrice", lImperatrice);
localStorage.setItem("laForce", laForce);

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

// localStorage.setItem("laLuna3", laLuna);
//     localStorage.setItem("lamoureux3", lamoureux);
//     localStorage.setItem("leMonde3", leMonde);
//     localStorage.setItem("lEtoile3", lEtoile);
//     localStorage.setItem("lImperatrice3", lImperatrice);
//     localStorage.setItem("laForce3", laForce);