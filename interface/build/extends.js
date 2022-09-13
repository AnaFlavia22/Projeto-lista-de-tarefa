"use strict";
//Vamos supor que temos um jogo e esse jogo pode ter uma dlc
const left4dead = {
    id: "123",
    nome: "Lef 4 Dead 2",
    descricao: "Jogo de acao e tiro",
    plataforma: ["PSS", "PC"]
};
const left4deadDLC = {
    id: "90",
    nome: "Left 4 Dead - Novos Mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["PSS", "PC"],
    novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "Medalhas"],
    jogoOriginal: left4dead
};
//console.log(left4deadDLC);
