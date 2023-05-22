//- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let number = 10; // Número para calcular el factorial
let factorial = 1; // Variable para almacenar el resultado

// Bucle while con bifurcación if y sentencia break para calcular el factorial
while (true) {
  factorial *= number; // Multiplicar el factorial actual por el número
  number--; // Decrementar el número en 1 en cada iteración

  if (number === 0) {
    break; // Romper el bucle cuando el número llegue a 0
  }
}

console.log("El factorial de 10 es: " + factorial);
