const minhaFuncao = () => {
    console.log("Esta é uma função de seta!");
};

minhaFuncao();

const soma = (a, b) => a + b;

console.log(soma(3, 5));

const multiplicacao = (a, b) => a * b;

console.log(multiplicacao(4, 6));

const saudacao = nome => `Olá, ${nome}! Seja bem-vindo!`;

console.log(saudacao("Maria"));

const numeros = [1, 2, 3, 4, 5];

const numerosAoQuadrado = numeros.map(numero => numero * numero);

console.log(numerosAoQuadrado);

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);

const somaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(somaNumeros);

const criarPessoa = (nome, idade) => ((idadeAtual) => ({
    nome,
    get idade() {
        return idadeAtual;
    },
    aniversario: () => {
        idadeAtual += 1;
        console.log(`${nome} fez aniversário e agora tem ${idadeAtual} anos.`);
    }
}))(idade);

const pessoa = criarPessoa("João", 25);
pessoa.aniversario();