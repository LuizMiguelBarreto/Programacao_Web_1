/* 
//Funções em JS

// Funções são blocos de codigo reultilizaveis

//função simples
console.log("Funções")
function hello(){
    console.log(`seja bem vindo`)
}
hello()

//funções com paranmetro

let nomeUser = prompt("Qual é o seu nome")
function saudacao2(nome){
    console.log(`seja bem vindo ${nome}`)
}

saudacao2(nomeUser)

//Ex2 - Função com parametro e retorno
function soma(num1,num2,){
    return num1 + num2
}

console.log(`A soma dos números é:  ${soma(2,8)}` )
*/
//ex 3 - Arrow Function

let soma = (num1,num2) => {
    return num1 + num2
}

console.log(`A soma com arrow fuction é: ${soma(4,4)}`)
