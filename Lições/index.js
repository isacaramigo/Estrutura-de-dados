import { criarPilha, inserirItem, retirarItem, procurarNaPilha } from "./pilha.js";

const listaAlunos = [
    {
        nome: 'Dom Casmurro',
        id: 145,
    },
    {
        nome: 'A Metamorfose',
        id: 220,
    },
]

console.log("Meu arquivo index.js")
const pilha = criarPilha(3)
console.log(pilha)
inserirItem(pilha, {
    nome: 'Dom Casmurro',
    id: 145,
})

procurarNaPilha(pilha, {
    nome: 'Dom Casmurro',
    id: 145,
})