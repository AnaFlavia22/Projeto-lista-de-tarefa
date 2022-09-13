"use strict";
/*let loja: object;

loja = {
  nome: "BK",
  endereco: "Rua x",
  status: true
}*/
const BurguerK = {
    nome: "Burguer K",
    endereco: "Rua logo ali",
    status: true,
};
//console.log(BurguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereco da loja ${endereco}`);
    console.log(`Status da loja ${status}`);
    console.log("==============");
}
novaLoja({ nome: "Red Burguer", endereco: "Rua ali na esquina", status: false });
novaLoja({ nome: "Subway", endereco: "Rua dez", status: true });
