/* factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while*/
let num = 10;//numero para calcular el factorial
let factorial = 1;//variable para almacenar el resultado        

//bucle while para calcular el factorial
while(num > 0 ) {
    factorial *= num;// Multiplicar el factorial actual por el número
    num--;// Decrementar el número en 1 en cada iteración
     }

     console.log(" el factorial de 10 es:" + factorial);

    