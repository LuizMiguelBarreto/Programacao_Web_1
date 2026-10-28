/*
A diferença do While e Do While 

1 - While
    1.1 - verifica a codição antes de entrar no loop
    1.2 - Tem um contador e variavel de escape do loop

2 - Do While
    1.1 - Primeiro executa o loop, depois testa
    1.2 - Usado quando se precisa executar o loop pelo menos 1 vez
    1.3 - Escapa do loop apenas se a variavel atender a condição 



//While

let num1 = 0
while(num1 <= 5){
    console.log(`${(num1 +1)}º rodada`)
    num1++
}

// Exemplo 2 tabuada

let num1 = 0
let numFixo = 2
while(num1 <= 10){
    console.log(`${numFixo} x ${num1} = ${numFixo * num1}\n`)
    num1++
}
*/

//Exercicio Tabuada com Prompt

let num1 = 0;
let numFixo = Number(prompt(`Digite um número para ver sua tabuada`))
while(num1 <= 10){
    console.log(`${numFixo} x ${num1} = ${numFixo * num1}\n`)
    num1++
}

//


