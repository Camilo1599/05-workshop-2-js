let dailyBudget = Number(prompt("Ingresa tu presupuesto diario"));
let eatOut = Number(prompt("Ingresa cuanto te costara comer fuera: "));
let buyBooks = Number(prompt("Ingresa cuanto te cuesta comprar libros: "));
let dailySaving = Number(prompt("Ingresa cuanto seia lo minimo que quisieras ahorrar"));
let totalExpenses = eatOut + buyBooks + dailySaving;
console.log(totalExpenses)
if (dailyBudget >= totalExpenses) {
    alert("Con tu presupuesto de hoy puedes comer comprar libros y guardar el minimo de ahorro que deseas");
}
else if (dailyBudget < totalExpenses) {
  if (dailyBudget > eatOut && dailyBudget > buyBooks && dailyBudget < eatOut + buyBooks ) {
    alert("Solo puedes realizar una de las actividades o comer afuera o comprar libros guardando el ahorro minimo");
    alert("si deseas comer fuera podras ahorrar: " + (dailyBudget - eatOut));
    alert("si deseas comprar libros podras ahorrar: " + (dailyBudget - buyBooks))
    let option = confirm("deseas comer fuera?");
    if (option == true){
        alert("Elegiste comer fuera y ahorrar: " + (dailyBudget - eatOut))
    }
    else {
        alert("elegiste comprar libros y ahorrar: " + (dailyBudget - buyBooks))
    }
  }
}
else if (dailyBudget < eatOut && dailyBudget < buyBooks && dailyBudget < dailySaving) {
    alert("Con tu presupuesto de hoy no podras permitirte ningun gasto");
}
