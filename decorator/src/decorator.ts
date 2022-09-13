// DECORATORS: class, propriedade, metodos, parametros-bem pouco usado, getters/setters

//target = receber o construtor da classe
/*function logInfo(target: any){
  console.log("Sistema esta online!");
}*/

//Padrao Factory = funcao que retorna a criacao do decorator
/*function logInfo(message: string){
  return (target: any) => {
    console.log(`${message}, ${target}`);
  }
}

@logInfo("Servidor esta rodando")
class Sistema{

}*/

// PRATICANDO
function setIpServidor(novoIp: string){
  return (target: any) => { //target e o construtor da nosa classe
    return class extends target{
      ip = novoIp;
    }
  }
}

@setIpServidor("192.168.50.900")
class Servidor{

}

const servidor1 = new Servidor();

console.log(servidor1);