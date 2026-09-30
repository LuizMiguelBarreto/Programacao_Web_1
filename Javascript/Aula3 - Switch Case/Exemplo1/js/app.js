alert("Bem vindo a aula de Switch Case")
let num1 = Number(prompt("Digite o Primeiro Numero"))
let num2 = Number(prompt("Digite o Segundo Numero"))

let escolha = Number(prompt("Digite 1 para somar e 2 para multiplicação"))

console.log(num1, num2, escolha)

switch(escolha){
    case 1:
        let soma = num1 + num2
        console.log(`Voce escolheu soma. O valor da soma é: ${soma}`)
        break
    case 2:
        let mult = num1 * num2
        console.log(`Voce escolheu Multiplicação. O valor do produto é: ${mult}`)
        break
    default:
        console.log("ERRO! Escolha invalida")
}