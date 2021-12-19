console.log("Hello");

var click = 0; 
function getId(btn)
{  

    updateCount(btn); 
}


var laForce = 0; 
var laLuna= 0; 
var lImperatrice= 0; 
var lamoureux= 0; 
var leMonde= 0; 
var lEtoile= 0; 



function updateCount(btn){

//question 1
    if(btn.id == 1){
        laLuna = laLuna + 1;
        lImperatrice = lImperatrice + 1;
        lamoureux = lamoureux + 1;
        lEtoile = lEtoile + 1;
    }
    else if(btn.id == 2){
        laForce = laForce + 1;
        leMonde = leMonde + 1;
    }
    else if(btn.id == 3){
        laLuna = laLuna + 1;
        lImperatrice = lImperatrice + 1;
    }
    else if(btn.id == 4){
        laLuna = laLuna + 1;
        lamoureux = lamoureux + 1;
    }
    else if(btn.id == 5){
        laForce = laForce + 1;
        lEtoile = lEtoile + 1;
    }
    else if(btn.id == 6){
        laLuna = laLuna + 1;
        leMonde = leMonde + 1;
    }
    else if(btn.id == 7){
        lImperatrice = lImperatrice + 1;
        lEtoile = lEtoile + 1;
    }
    else if(btn.id == 8){
        laForce = laForce + 1;
        leMonde = leMonde + 1;
        lamoureux = lamoureux + 1;
    }
    else if(btn.id == 9){
        laForce = laForce + 1;
        lImperatrice = lImperatrice + 1;
        leMonde = leMonde + 1;
    }
    else if(btn.id == 10){
        laLuna = laLuna + 1;
        lImperatrice = lImperatrice + 1;
        leMonde = leMonde + 1;
        lEtoile = lEtoile + 1;
    }
    else if(btn.id == 11){
        laLuna = laLuna + 1;
        lImperatrice = lImperatrice + 1;
        leMonde = leMonde + 1;
        lEtoile = lEtoile + 1;
    }
    else if(btn.id == 12){
        laLuna = laLuna + 1;
        lamoureux = lamoureux + 1;
        leMonde = leMonde + 1;
        lEtoile = lEtoile + 1;
    }
    console.log(lImperatrice);

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

// getMax(lImperatrice, lamoureux, leMonde, laForce, laLuna, lEtoile);

// function getMax(lImperatrice, lamoureux, leMonde, laForce, laLuna, lEtoile){
//     var max = 0; 

//     if(laForce > max){
//         max = laForce; 
//         window.alert("La Force");
//     }
//     else if(lImperatrice > max){
//         max = lImperatrice; 
//         window.alert("L Imperatrice");
//     }
//     else if(lamoureux > max){
//         window.alert("Lamoureux");
//     }
//     else if(leMonde > max){
//         window.alert("Le Monde");
//     }
//     else if(lEtoile > max){
//         window.alert("L Etoile");
//     }





