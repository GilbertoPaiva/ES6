function funcaoMuitoPesada() {
  let execucoes = 0;
  for (let i = 0; i < 10000000000; i++) {
    execucoes++;
  }
  return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execucoes = 0;
    for (let i = 0; i < 10000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject('Deu erro na função muito pesada');
  }
})

console.log("Iniciando tarefa assíncrona...");
funcaoMuitoPesadaPromise
  .then(resultado => console.log(resultado));
console.log("Tarefa assíncrona iniciada.");

const promiseComParametros = (login, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(`Logado com o usuario: ${login}`) }, 3000)
  });
}


async function execucaoPrincipal() {
  console.log("Iniciando execução principal...");

  promiseComParametros("usuario123", "senhaSegura")
    .then(resultado => {console.log(resultado);});
  try {
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }

  console.log("Execução principal finalizada.");
}

execucaoPrincipal();