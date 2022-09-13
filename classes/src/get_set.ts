// Caso de uso de um jogo

class Jogo{
  private servidor: string;
  private id: string = "1234";

  constructor(servidor: string){
    this.servidor = servidor;
  }
  
  //Metodo GET = para pegar o valor
  get getServidorIP(){
    console.log("== METODO GET ==")
    return this.servidor;
  }

  //Metodo SET = para passar/alterar algum atributo
  set setServidorIP(novoIp: string){
    if(this.servidor === novoIp){
      throw new Error("O novo IP deve ser diferente do IP antigo");
    }

    this.servidor = novoIp;
  }
}

const GTA5 = new Jogo("192.168.5.10");

try{
  GTA5.setServidorIP = "192.168.5.10"
}catch(error){
  //console.log("ERROR: ", error.message); esta aparecendo um erro
}

console.log(GTA5.getServidorIP);

//console.log(GTA5);