// Generics: permite criar estruturas que serao adaptaveis a varios tipos de dados
// usados em funcoes, interfaces, type, classes
// Alguns padroes: S => State; T => Type; K => Key; V => value; E => Element

function repositorio<T extends string | number>(){
  let dados: T;

  function getDados(){
    return dados;
  }

  function setDados(novoDado: T){
    dados = novoDado;
  }

  return {getDados, setDados}
}

const repo1 = repositorio<string | number>();

repo1.setDados("15");

console.log(repo1.getDados());

const repo2 = repositorio<number>();

repo2.setDados(25);

console.log(repo2.getDados());