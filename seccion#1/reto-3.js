const threshold = 200;
const articles = [];
let article;

let nameArticle, extraArticle, finalBudget, betterOption;

let initialBudget = prompt("Ingresa el presupuesto inicial para este viaje: ");
let dailyBudget = prompt(
  "Ingresa los gastos diarios en alojamiento, transporte y alimento para este viaje: "
);
let days = prompt("Ingresa la cantidad de dias que durara este viaje");
// nameArticle = prompt("Ingresa el nombre del articulo extra que deseas comprar");
extraArticle = prompt("Ingresa el costo del articulo extra que deseas comprar");
finalBudget = initialBudget - dailyBudget * days;
console.log(extraArticle);
betterOption = extraArticle;
console.log(betterOption);

extraArticle = prompt("Ingresa el costo del articulo extra que deseas comprar");
console.log(extraArticle);
if (extraArticle < betterOption) {
  betterOption = extraArticle;
} else {
  betterOption = betterOption;
}
console.log(betterOption);

extraArticle = prompt("Ingresa el costo del articulo extra que deseas comprar");
console.log(extraArticle);
if (extraArticle < betterOption) {
  betterOption = extraArticle;
} else {
  betterOption = betterOption;
}
console.log(betterOption);
alert("El articulo extra mas economico es el que cuesta $" + betterOption);

if (finalBudget - extraArticle >= threshold) {
  alert("Tu presupuesto es suficiente para comprar el articulo extra");
} else {
  alert("evita gastos adicionales para no sobrepasar el presupuesto");
}
