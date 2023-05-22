//factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

let number = 10; // Número para calcular el factorial
let factorial = 1; // Variable para almacenar el resultado

// Bucle for para calcular el factorial
for (let i = number; i > 0; i--) {
  factorial *= i; // Multiplicar el factorial actual por el número
}

console.log("El factorial de 10 es: " + factorial);
