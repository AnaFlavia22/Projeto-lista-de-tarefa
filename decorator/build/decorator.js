"use strict";
// DECORATORS: class, propriedade, metodos, parametros-bem pouco usado, getters/setters
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function setIpServidor(novoIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = novoIp;
            }
        };
    };
}
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpServidor("192.168.50.900")
], Servidor);
const servidor1 = new Servidor();
console.log(servidor1);
