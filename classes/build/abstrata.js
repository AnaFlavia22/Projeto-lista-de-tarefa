"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("============");
        console.log(`Nova conta P. Fisica criada com sucesso ${dados.nome}`);
        console.log("============");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("============");
        console.log(`Nova conta P. Juridica criada com sucesso ${dados.nome}`);
        console.log("============");
        return true;
    }
}
const joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana Silva",
    numero: "1029-x",
    endereco: "Rua 15, bairro centro"
});
const sujeitoprogramador = new PessoaJuridica();
sujeitoprogramador.abrirConta({
    nome: "Ana",
    numero: "90201-x",
    endereco: "Avenida dez, centro"
});