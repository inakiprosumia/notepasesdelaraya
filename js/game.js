// Variables
var milei = document.getElementById("milei");
var massa = document.getElementById("massa");
var linea = document.getElementById("linea");

// Funciones
function moveMilei() {
  milei.style.left = milei.style.left + 5;
}

function moveMassa() {
  massa.style.left = massa.style.left - 5;
}

// Eventos
milei.addEventListener("click", moveMilei);
massa.addEventListener("click", moveMassa);

// Bucle principal
function update() {
  // Verifica si alguno de los candidatos pasó la línea
  if (milei.offsetLeft > linea.offsetLeft + linea.offsetWidth) {
    // El juego ha terminado
    console.log("Milei ganó");
  } else if (massa.offsetLeft < linea.offsetLeft) {
    // El juego ha terminado
    console.log("Massa ganó");
  }
}

// Llama al bucle principal
setInterval(update, 100);
