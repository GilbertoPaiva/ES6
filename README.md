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
node dist/arrow.js      # demonstra arrow functions e closures
node dist/rest_spread.js# exemplos de rest, spread e destructuring
node dist/map_set.js    # exemplos de Map e Set
```

## O que os exemplos fazem
- `src/teste.js`: apenas imprime uma mensagem para validar o pipeline Babel.
- `src/arrays.js`: percorre arrays, cria objetos com `map`, busca índice com `findIndex`, verifica condições com `every`/`some`, filtra com `filter`, e soma valores usando `map`, `reduce` e `for`.
- `src/arrow.js`: mostra usos de arrow functions (retorno implícito, `map`/`filter`/`reduce`) e um factory `criarPessoa` que usa fechamento para armazenar estado e expõe método `aniversario` como arrow.
- `src/rest_spread.js`: compara a soma com `arguments` vs rest params, multiplica listas com rest, soma com `reduce`, combina arrays/objetos com spread e faz destructuring de objetos e arrays.
- `src/map_set.js`: cria e itera `Map`, consulta e remove chaves, extrai chaves/valores, e usa `Set` para unicidade, deduplicação e interseção/diferença simples.

## Scripts npm
- `npm run build`: transpila todos os arquivos de `src/` para `dist/` usando Babel CLI e `@babel/preset-env`.

## Estrutura
- `src/`: código-fonte ES6+ (não compatível nativamente em runtimes antigos).
- `dist/`: saída gerada pelo Babel (`npm run build`).
- `babel.config.json`: preset `@babel/preset-env` configurado para targets definidos em `browserslist`.

## Dicas rápidas
- Sempre rode `npm run build` após modificar algo em `src/`.
- Caso o comando `npm run build` não exista, confira se o `package.json` está no diretório raiz do projeto.
