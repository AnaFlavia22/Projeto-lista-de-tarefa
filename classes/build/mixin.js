"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = require("./mixin/applyMixins");
class Automovel {
    ligar() {
        console.log("AUTOMOVEL LIGADO COM SUCESSO!");
    }
    desligar() {
        console.log("DESLIGANDO AUTOMOVEL");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixins_1.applyMixins)(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol 1.6");
gol.ligar();
gol.descricao = "Modelo completo, automatico";
console.log(gol);
gol.desligar();
