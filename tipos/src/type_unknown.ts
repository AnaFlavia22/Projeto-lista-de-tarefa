// Tipo desconhecido > quando voce nao sabe o TIPO que vai receber

let total: unknown;

total = 100;

total = "350"

total = {
  total: 100,
}

let idPedido: any = 123;

let totalPedido: unknown = 15;

let entregador: number = idPedido;

//valor do tipo unknown so podem ser atribuidos a tipo unknown ou ao any
let totalEntrega: any = totalPedido; 

console.log(totalEntrega);