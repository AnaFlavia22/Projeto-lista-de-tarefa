"use strict";
// Heranca > quando nos temos uma classe que herda de outra classe
// ClassePai tem seus atributos e a classeFilha vai herdar todos os atributos
// Encapsulamento: 4 modificadores: Public, Private, Protected, readonly
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        //Chamando o construtor da classe pai
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log("ALTERANDO CARGO PARA: ", cargo);
        console.log("ID DO USUARIO: ", this.id);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario1 = new Admin(123, "Ana", "ana@teste.com", "Programador", 2);
//usuario1.cargo = "Designer";
//usuario1.mudarCargo();
usuario1.acessarAdmin();
//console.log(usuario1);
//console.log(usuario1.nome);
