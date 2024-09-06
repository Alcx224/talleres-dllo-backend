//Punto 1
function desglosarString(cadena, tipo) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let letra of cadena.toLowerCase()) {
        if (tipo === 'vocales' && vocales.includes(letra)) {
            contador++;
        }
        else if (tipo === 'consonantes' && !vocales.includes(letra) && /[a-z]/.test(letra)) {
            contador++;
        }
    }

    return contador;
}

//Punto 2
function twoSum(nums, objetivo) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complemento = objetivo - nums[i];

        if (map.has(complemento)) {
            return [map.get(complemento), i];
        }
        map.set(nums[i], i);
    }

    return null;
}

//Punto 3
function conversionRomana(romano) {
    const valoresRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let previo = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
        let actual = valoresRomanos[romano[i]];

        if (actual < previo) {
            total -= actual;
        } else {
            total += actual;
        }

        previo = actual;
    }

    return total;
}




