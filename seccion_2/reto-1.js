let energy = Number(prompt("Ingrese su nivel de energia del: 0 - 100"));
console.log(energy);
if (energy < 45) {
  energy = null;
}
const climate = confirm("Esta haciendo buen clima?");
console.log(climate);
let work = Number(prompt("ingresa tu carga laboral del: 0 - 10"));
console.log(work);
if (work < 4) {
  work = null;
}

if (!energy && !work) {
  alert("Puedes tomarte el dia libre");
}

else if (energy && work) {
  alert("Deberias trabajar en tus proyectos personales");
}

else if (!energy && work) {
  alert("Deberias trabajar en tus proyectos personales");
}

else if (energy && climate && !work) {
  alert("Puedes salir a correr");
}

