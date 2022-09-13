"use strict";
// Uma classe armazena as caracteristicas/atributos e as acoes/metodo que esse objeto vai possuir
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!");
        }
        else {
            console.log("LOJA FECHADA");
        }
    }
}
const redBurguer = new Loja("Red Burguer", "lanches");
//console.log(redBurguer.nome);
//console.log(redBurguer.categoria);
//redBurguer.criarLoja();
//const retornoLoja = redBurguer.emitirPedido(48, "Suco Gelado", "Hamburguer Duplo", "Coca 2L");
//console.log(retornoLoja);
redBurguer.mudarStatus("FECHADO");
//const sucos = new Loja("Sucao Gelado", "sucos");
//console.log(sucos.nome);
