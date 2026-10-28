/*
Objetos armazenam dados organizados ex: Propriedade e valor
ex01:
*/

let aluno = {
    nome: "Carlos",
    Idade: "20",
    curso: "Desenvolvimento De Sistemas"
}

for(let chave in aluno){
    console.log(`${chave}: ${aluno[chave]}`);
}


