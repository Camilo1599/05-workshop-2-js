const weightTotal = prompt("Ingresa el peso total permitido ");
let remainingSpace = confirm("Aun queda espacio disponible");


console.log(remainingSpace)
if(remainingSpace == true) {
    let climatePronostic = Number(prompt("elige una opcion: 1.soleado  2.lluvioso"));
    if (climatePronostic == 1){
        alert("Puedes llevar la camara se espera un buen clima")
    }
    else if (climatePronostic == 2){
        alert("Debes llevar el paraguas pues se esperan lluvias")
    }
} 
else{
    alert("Ya no queda espacio disponible en la maleta")
}