# Babel - Exercício EBAC

Este repositório é um exercício simples sobre o Babel para o curso Full Stack Java da EBAC. A ideia é mostrar como transpilar código moderno (ES6+) para uma versão compatível com navegadores/ambientes que ainda não suportam todos os recursos.

## O que é o Babel?
- Babel é um transpiler para JavaScript: ele lê código usando sintaxe moderna e gera uma saída equivalente em JS compatível com ambientes mais antigos.
- Serve para manter uma base de código atualizada sem se preocupar com limitações de suporte de runtimes ou navegadores.

## Como usar
1) Instale as dependências:
```bash
npm install
```
2) Transpile de `src/` para `dist/`:
```bash
npm run build
```
3) Execute o arquivo gerado:
```bash
node dist/teste.js
```

## Estrutura
- `src/`: código-fonte em ES6+.
- `dist/`: saída transpilada pelo Babel.

## Scripts npm
- `npm run build`: transpila o código de `src/` para `dist/` usando Babel.

## Pré-requisitos
- Node.js 18+ (ou superior) instalado na máquina.

## Notas
- Caso altere o código em `src/`, rode novamente `npm run build` para atualizar a saída em `dist/`.
