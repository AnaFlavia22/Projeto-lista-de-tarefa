// Uma classe armazena as caracteristicas/atributos e as acoes/metodo que esse objeto vai possuir

type Status = "ABERTO" | "FECHADO";

class Loja{
  //Atributos
  nome: string;
  categoria: string;

  constructor(nome: string, categoria: string){
    this.nome = nome;
    this.categoria = categoria;
  }

  criarLoja(): void{
    console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
  }

  emitirPedido(mesa: number, ...pedidos: string[]): string{
    pedidos.map((pedido) => {
      console.log(`Saindo novo pedido: ${pedido}`)
    })
    
    return `Pedido na mesa: ${mesa}`;
  }

  mudarStatus(status: Status){
    if(status === "ABERTO"){
      console.log("LOJA ABERTA COM SUCESSO!");
    }else{
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