// Map
const cursosPorId = new Map();
cursosPorId.set("FRONT", { nome: "Ana", curso: "Front-end" });
cursosPorId.set("BACK", { nome: "Bruno", curso: "Back-end" });
cursosPorId.set("FULL", { nome: "Carla", curso: "Full-stack" });

console.log("FRONT =>", cursosPorId.get("FRONT"));
console.log("Tem DEVOPS?", cursosPorId.has("DEVOPS"));
console.log("Tamanho do Map:", cursosPorId.size);

cursosPorId.forEach((valor, chave) => {
	console.log(`${chave}: ${valor.nome} - ${valor.curso}`);
});

console.log("Chaves (for...of):", [...cursosPorId.keys()]);
console.log("Valores (for...of):", [...cursosPorId.values()]);
for (const [id, dados] of cursosPorId.entries()) {
    console.log(`Entry ${id}: ${dados.nome} / ${dados.curso}`);
}

const ids = Array.from(cursosPorId.keys());
const apenasCursos = Array.from(cursosPorId.values()).map(({ curso }) => curso);
console.log("IDs:", ids);
console.log("Cursos:", apenasCursos);

cursosPorId.delete("BACK");
console.log("Após remover BACK, tamanho:", cursosPorId.size);

// Set
const times = new Set(["Flamengo", "Palmeiras", "Flamengo", "Grêmio"]);
console.log("Times únicos:", [...times]);
console.log("Tamanho do Set:", times.size);

times.add("São Paulo");
console.log("Tem Grêmio?", times.has("Grêmio"));
times.delete("Palmeiras");
console.log("Após remover Palmeiras:", [...times]);
console.log("Tamanho do Set após remoção:", times.size);

console.log("Entries do Set (valor duplicado como chave/valor):", [...times.entries()]);
for (const valor of times.values()) {
	console.log("Valor do Set:", valor);
}

// Deduplicação rápida
const numeros = [1, 2, 3, 3, 4, 4, 5];
const numerosUnicos = [...new Set(numeros)];
console.log("Números únicos:", numerosUnicos);

// Operações de conjunto simples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const intersecao = [...setA].filter(n => setB.has(n));
const diferenca = [...setA].filter(n => !setB.has(n));

console.log("Interseção A∩B:", intersecao);
console.log("Diferença A-B:", diferenca);
