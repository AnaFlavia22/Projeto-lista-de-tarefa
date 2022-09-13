//console.log("TESTANDO SCRIPT RODANDO");

const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const buttonSoma = document.getElementById('buttonSomar') as HTMLInputElement;
const buttonSubtrair = document.getElementById('buttonSubtrair') as HTMLInputElement;
const buttonMultiplicar = document.getElementById('buttonMultiplicar') as HTMLInputElement;
const buttonDividir = document.getElementById('buttonDividir') as HTMLInputElement;

type Operacoes = "SOMAR" | "SUBTRAIR" | "MULTIPLICAR" | "DIVIDIR";

interface Valores{
  tipo: Operacoes;
  a: number;
  b: number;
}

function operacao({tipo, a, b}: Valores): number{
  if(tipo === "SOMAR"){
    return a + b;
  }else if(tipo === "SUBTRAIR"){
    return a - b;
  }else if(tipo === "MULTIPLICAR"){
    return a * b;
  }else{
    return a/b;
  }
}

buttonSoma.addEventListener('click', function(){
  const resultado = operacao({
    tipo: "SOMAR",
    a: Number(input1.value),
    b: Number(input2.value),
  });
  console.log(resultado);
})

buttonSubtrair.addEventListener('click', function(){
  const resultado = operacao({
    tipo: "SUBTRAIR",
    a: Number(input1.value),
    b: Number(input2.value),
  });
  console.log(resultado);
})

buttonMultiplicar.addEventListener('click', function(){
  const resultado = operacao({
    tipo: "MULTIPLICAR",
    a: Number(input1.value),
    b: Number(input2.value),
  });
  console.log(resultado);
})

buttonDividir.addEventListener('click', function(){
  const resultado = operacao({
    tipo: "DIVIDIR",
    a: Number(input1.value),
    b: Number(input2.value),
  });
  console.log(resultado);
})

function verificaNum(){
  if(input1.value === "" || input2.value === ""){
    alert("Insira um numero!")
    return false;
  }
}

buttonSoma.onclick = verificaNum
buttonSubtrair.onclick = verificaNum
buttonMultiplicar.onclick = verificaNum
buttonDividir.onclick = verificaNum
