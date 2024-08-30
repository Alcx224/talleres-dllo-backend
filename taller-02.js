//Punto1
function findMax(numbers) {

    let max = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

//Punto2
function includes(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return true;
        }
    }
    return false; 
}

//Punto3
function sum(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

//Punto4
function missingNumbers(numbers) {
    
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    
    let missing = [];
    
    
    for (let i = min; i <= max; i++) {
        if (!numbers.includes(i)) {
            missing.push(i); 
        }
    }

    return missing;
}

/*Pruebas

const lista1 = [3, 17, 1, 4, 19];
console.log(includes(lista1, 2)); // Output: false

const lista2 = [3, 17, 1, 4, 19];
console.log(includes(lista2, 4)); // Output: true

const lista4 = [3, 17, 1, 4, 20];
console.log(sum(lista4)); // Output: 44

const lista5 = [7, 2, 4, 6, 3, 9];
console.log(missingNumbers(lista5)); // Output: [5, 8]
*/