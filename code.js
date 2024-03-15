var compose = function (functions) {
    
    return function (x) {
        var resultado = x;
        for(let i = functions.length-1 ; i >= 0; i--){
            let fn = functions[i];
            resultado = resultado + fn(x)
        }
        return resultado;
    }
};


// Ejemplo de uso:
const f1 = (x) => x + 1;
const f2 = (x) => x * 2;
const f3 = (x) => x - 3;



const functionsArray = [f1, f2, f3];

console.log(functionsArray.length);

const xValue = 5;
const result = compose(functionsArray)(xValue);

console.log(`Resultado de la función compuesta en x=${xValue}: ${result}`);
