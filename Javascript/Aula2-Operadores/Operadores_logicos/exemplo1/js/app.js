/* 
Operadores Logicos

&& -> (and/E) lógico
|| -> (or/Ou) lógico
! -> (Not/Não) lógico

*/

//Exemplos simples

let num1 = 10;
let num2 = 15;
let num3 = 2;

console.log("Condiçoes Simples")

if(num1 >= num2){
    console.log("Entrou no IF ")
}else{
    console.log("(FALSIANE!)NÃO ENTROU NO IF");
}

//Exemplo Composto

console.log("Condiçoes Composta")

if((num1 >= num2) && (num1 != num3)){
    console.log("Entrou no IF ")
}else{
    console.log("(FALSIANE!)NÃO ENTROU NO IF");
}

//Exemplo Com 3 condições

console.log("Condiçoes Com 3 Situações")

if(((num1 >= num2) && (num1 != num3)) || (num1 != num3)){
    console.log("Entrou no IF ")
}else{
    console.log("(FALSIANE!)NÃO ENTROU NO IF");
}

//Condição Simples Negada

console.log("Condiçoes Simples Negada")

if(!(num1 >= num2)){
    console.log("Entrou no IF ")
}else{
    console.log("(FALSIANE!)NÃO ENTROU NO IF");
}