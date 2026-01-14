const redeSocial = [ `Facebook`, `Instagram`, `Twitter`, `LinkedIn` ];

for (let i = 0; i < redeSocial.length; i++) {
  console.log(`Eu uso a rede social: ${redeSocial[i]}`);
}

redeSocial.forEach(function(nomeDaRedeSocial, indice) {
  console.log(`#${indice} Também uso a rede social: ${nomeDaRedeSocial}`);
});

const alunos = [ `Gustavo`, `Ana`, `Juliana`, `André`, `Fernanda` ];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: `Front-end`
    }
    });

console.log(alunos2);

const indiceDpGustavo = alunos2.findIndex(function(item) {
    return item.nome === `Gustavo`;
});

console.log(indiceDpGustavo);

alunos2.push({ nome: `Carlos`, curso: `Back-end` });

const resultadoEvery = alunos2.every(function(item) {
    return item.curso === `Front-end`;
});
console.log(resultadoEvery);

const resultadoSome = alunos2.some(function(item) {
    return item.curso === `Back-end`;
});
console.log(resultadoSome);

function ehCursoFrontEnd(item) {
    return item.curso === `Front-end`;
}

const resultadoFilter = alunos2.filter(ehCursoFrontEnd);
console.log(resultadoFilter);



const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2;
});

console.log(dobroDosNumeros);

const somaDosNumeros = numeros.reduce(function(acumulador, numeroAtual) {
    return acumulador + numeroAtual;
}, 0);

console.log(somaDosNumeros);

let somaComFor = 0;
for (let i = 0; i < numeros.length; i++) {
    somaComFor += numeros[i];
}

console.log(somaComFor);