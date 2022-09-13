// Decorator Metodo, ele so e chamado quando nosso metdo for chamado em algum local

import {verificaPessoa} from './decorators/verificaPessoa';

class Pessoa{
  nome: string;
  
  constructor(nome: string){
    this.nome = nome;
  }

  @verificaPessoa(16)
  cadastrarPessoa(){
    console.log(`Bem vindo ${this.nome} ao sistema`)
  }
}

const pessoa1 = new Pessoa("Ana");

pessoa1.cadastrarPessoa();