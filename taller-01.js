//Punto 1
function convertidorTemp(t){
  return (t * 1.8) + 32;
} 

//Punto 2
function resolvedor(a, b, c, signo){
  const discr = (b ** 2) - (4 * a * c);
  const raiz = Math.sqrt(discr);
  let x;
  if (signo){
    x = (-b + raiz)/ (2 * a);
  } else {
    x = (-b - raiz)/ (2 * a);
  }
  return x;
}

//Punto 3

function mejorParidad(n) {
   if (n % 2 === 0){
    console.log("n is even");
   } else {
    console.log ("n is odd");
   }
}

//Punto 4 

function peorParidad(numero) {
    const paridades = [
        'par',   // 0
        'impar', // 1
        'par',   // 2
        'impar', // 3
        'par',   // 4
        'impar', // 5
        'par',   // 6
        'impar', // 7
        'par',   // 8
        'impar', // 9
        'par'    // 10
    ];

    if (numero >= 0 && numero <= 10) {
        return paridades[numero];
    } else {
        throw new Error("El número está fuera del rango permitido (0-10)");
    }
}


