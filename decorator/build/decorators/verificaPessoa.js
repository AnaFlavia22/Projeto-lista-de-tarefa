"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaPessoa = void 0;
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        /*console.log("Target: ", target);
        console.log("Key: ", key);
        console.log("Descriptor: ", descriptor);*/
        const metodoOriginal = descriptor.value; //Salvar nosso metodo original
        //reescrever o nosso metodo
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Estamos cadastrando como pessoa menor de idade");
                //retorna o metodo original
                return metodoOriginal.apply(this);
            }
            else {
                console.log("Adulto cadastrado no sistema");
                //retorna o metodo original
                return metodoOriginal.apply(this);
            }
        };
    };
}
exports.verificaPessoa = verificaPessoa;
