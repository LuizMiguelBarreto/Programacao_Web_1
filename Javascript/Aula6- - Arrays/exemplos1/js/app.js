/*
Arrays em Javascript

Variavel armazena apenas 1 valor
enquanto o array armazena múltiplos valores 

ex01:


let fruntas = ["Maça","Banana","Uva"]

for(let i = 0;i < fruntas.length;i++){
    console.log(fruntas[i])
}



métodos dos Arrays

Push() - Adiciona um item
pop() - Remove o item final final
shift() - remove do inicio
unshift() - Adiciona do inicio
legth - Conta o tamanho do array

ex2
*/

let fruntas = ["Maça","Banana","Uva"]

fruntas.push("morango")
fruntas.unshift("Goiaba")
fruntas.pop()

for(let i = 0;i < fruntas.length;i++){
    console.log(fruntas[i])
}

