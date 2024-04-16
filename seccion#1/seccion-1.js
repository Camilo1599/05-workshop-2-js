const destinoViaje = prompt("Cual es el destino de viaje: ");
const dailyBudget = prompt("Cuanto es el costo diario de este viaje: ");
let days, initialBudget, travelBudget;
let flag = 0;

while (flag == 0) {
  days = prompt("Cuantos dias durara este viaje: ");
  console.log(days);

  initialBudget = prompt("Cuanto es tu presupuesto inicial: ");
  console.log(initialBudget);

  travelBudget = initialBudget / days;

  if (travelBudget >= dailyBudget) {
    alert("Julian tiene suficiente dinero");
    flag = 1;
  } else {
    alert("deberias ajustar tu presupuesto o la duracion del viaje");
  }
}
