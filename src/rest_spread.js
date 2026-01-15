function somar() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar(1, 2, 3)); 
console.log(somar(5, 10, 15, 20));

function multiplicar(fator, ...numeros) {
    return numeros.map(numero => numero * fator);
}

console.log(multiplicar(2, 1, 2, 3)); 
console.log(multiplicar(3, 4, 5, 6)); 

function somarComRest(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(somarComRest(1, 2, 3, 4)); 
console.log(somarComRest(10, 20, 30));

// spread
const numeros1 = [1, 2, 3];
console.log(...numeros1);

const numeros2 = [4, 5, 6];
console.log(numeros2);

const todosNumeros = [...numeros1, ...numeros2];
console.log(todosNumeros);

const carroDaJulia = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
console.log(carroDaJulia);

const carroDoPedro = {
    ...carroDaJulia,
    cor: "vermelho",
    ano: 2021
};

console.log(carroDoPedro);

// destructuring
const marcaDoCarroDaJulia = carroDaJulia.marca;
const {modelo} = carroDaJulia;
console.log(marcaDoCarroDaJulia);
console.log(modelo);

const {ano: anoDoCarroDaJulia} = carroDaJulia;
console.log(anoDoCarroDaJulia);

const {ano: anoDoCarroDoPedro} = carroDoPedro;
console.log(anoDoCarroDoPedro);