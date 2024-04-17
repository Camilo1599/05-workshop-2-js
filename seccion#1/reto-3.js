const threshold = 200000;
let finalBudget = initialBudget - dailyBudget;

let initialBudget = prompt("Ingresa el presupuesto inicial para este viajer: ");
let dailyBudget = prompt("Ingresa los gastos diarios en alojamiento, transporte y alimento para este viaje: ");
let extraArticle = prompt("Ingresa el costo del articulo extra que deseas comprar");

if (finalBudget >= threshold){
    alert("Tu presupuesto es suficiente para comprar el articulo extra")
}
else{
    alert("evita gastos adicionales para no sobrepasar el presupuesto")
}
