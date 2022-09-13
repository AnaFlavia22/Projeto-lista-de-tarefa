"use strict";
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
function cadastroLoja(nome, email, status = false) {
    console.log("Status atual da loja: ", status);
    return status;
}
cadastroLoja("Burguer K", "bk@teste.com", true);
