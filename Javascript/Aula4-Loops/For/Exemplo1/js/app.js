console.log(`bem vindo a nossa tabuada`)

//Estrutura do loop for
/*
Se divide em 3 partes
1° parte - Variavel com contadora
2° parte - Condição
3° parte - incremento  


for(let i = 1; i <= 5;i++){
    console.log(`${i}° volta do loop for`);
}

console.log(`calculadora`);


alert(`bem vindo a nossa tabuada`)
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
for(let i = 0;i <= 10;i++){
    alert(`${escolha} x ${i} = ${escolha*i}\n`)

}



//Controles de loops

//Break para o Loop quando atender uma condição

alert(`bem vindo a nossa tabuada`)
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
for(let i = 0;i <= 10;i++){
    if(i == 5){
        break;
    }
    alert(`${escolha} x ${i} = ${escolha*i}\n`)

}

*/

//Continue - server para pular a proxima instrução mas continua o loop


alert(`bem vindo a nossa tabuada`)
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
for(let i = 0;i <= 10;i++){
    if(i == 5){
        continue
    }
    console.log(`${escolha} x ${i} = ${escolha*i}\n`)

}
