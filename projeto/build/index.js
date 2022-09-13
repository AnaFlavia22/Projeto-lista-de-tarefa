"use strict";
//console.log("TESTANDO SCRIPT RODANDO");
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const buttonSoma = document.getElementById('buttonSomar');
const buttonSubtrair = document.getElementById('buttonSubtrair');
const buttonMultiplicar = document.getElementById('buttonMultiplicar');
const buttonDividir = document.getElementById('buttonDividir');
function operacao({ tipo, a, b }) {
    if (tipo === "SOMAR") {
        return a + b;
    }
    else if (tipo === "SUBTRAIR") {
        return a - b;
    }
    else if (tipo === "MULTIPLICAR") {
        return a * b;
    }
    else {
        return a / b;
    }
}
buttonSoma.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "SOMAR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
});
buttonSubtrair.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "SUBTRAIR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
});
buttonMultiplicar.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "MULTIPLICAR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
});
buttonDividir.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "DIVIDIR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
});
function verificaNum() {
    if (input1.value === "" || input2.value === "") {
        alert("Insira um numero!");
        return false;
    }
}
buttonSoma.onclick = verificaNum;
buttonSubtrair.onclick = verificaNum;
buttonMultiplicar.onclick = verificaNum;
buttonDividir.onclick = verificaNum;
