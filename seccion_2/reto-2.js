let dailyBudget = Number(prompt("Ingresa tu presupuesto diario"));
let eatOut = Number(prompt("Ingresa cuanto te costara comer fuera: "));
let buyBooks = Number(prompt("Ingresa cuanto te cuesta comprar libros: "));
let dailySaving = Number(prompt("Ingresa cuanto seia lo minimo que quisieras ahorrar"));
let totalExpenses = eatOut + buyBooks + dailySaving;

if (dailyBudget >= totalExpenses) {
    alert("Con tu presupuesto de hoy puedes comer comprar libros y guardar el minimo de ahorro que deseas");
}
else if (dailyBudget < totalExpenses) {
  dailyBudget = dailyBudget - dailySaving;
  if (dailyBudget > eatOut && dailyBudget < buyBooks) {
    alert("Con tu presupuesto de hoy puedes salir a comer y guardar tu ahorro minimo");
  }
  else if (dailyBudget < eatOut && dailyBudget > buyBooks) {
    alert("Con tu presupuesto de hoy puedes comprar libros y guardar tu ahorro minimo");
  }
  else if (dailyBudget > eatOut && dailyBudget > buyBooks && dailyBudget < eatOut + buyBooks) {
    alert("Solo puedes realizar una de las actividades o comer afuera o comprar libros guardando el ahorro minimo");
  }
}
