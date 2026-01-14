# Babel - Exercício EBAC

Exercício rápido para demonstrar Babel transpiling ES6+ para compatibilidade ampla. O foco é ver na prática como o preset `@babel/preset-env` gera uma versão de saída consumível por runtimes mais antigos.

## Pré-requisitos
- Node.js 18+.
- npm (incluso no Node).

## Como rodar
1. Instale dependências
```bash
npm install
```
2. Transpile de `src/` para `dist/`
```bash
npm run build
```
3. Execute os exemplos transpilados (escolha o arquivo):
```bash
node dist/teste.js      # exemplo simples de transpile
node dist/arrays.js     # demonstra metodos de array
```

## O que os exemplos fazem
- `src/teste.js`: apenas imprime uma mensagem para validar o pipeline Babel.
- `src/arrays.js`: percorre arrays, cria objetos com `map`, busca índice com `findIndex`, verifica condições com `every`/`some`, filtra com `filter`, e soma valores usando `map`, `reduce` e `for`.

## Scripts npm
- `npm run build`: transpila todos os arquivos de `src/` para `dist/` usando Babel CLI e `@babel/preset-env`.

## Estrutura
- `src/`: código-fonte ES6+ (não compatível nativamente em runtimes antigos).
- `dist/`: saída gerada pelo Babel (`npm run build`).
- `babel.config.json`: preset `@babel/preset-env` configurado para targets definidos em `browserslist`.

## Dicas rápidas
- Sempre rode `npm run build` após modificar algo em `src/`.
- Caso o comando `npm run build` não exista, confira se o `package.json` está no diretório raiz do projeto.
