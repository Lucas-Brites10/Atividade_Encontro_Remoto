// ATIVIDADE DO CARD 9 - ATIVIDADE 5 - ENCONTRO REMOTO 2

/* */

// SORTEANDO UM NÚMERO ALEATORIO DE ALUNOS
let NumeroDeAlunos;

let ListaAlunos;
ListaAlunos = [] 

function GerarNumeroAlunos(){

    NumeroDeAlunos = Math.random(1, 4) * 10
    NumeroDeAlunos = Math.round(NumeroDeAlunos)
    
    if (NumeroDeAlunos == 0 || NumeroDeAlunos < 1){
        GerarNumeroAlunos()
    }

    return NumeroDeAlunos

}
GerarNumeroAlunos()
console.log(NumeroDeAlunos)

for (index = 1; index <= NumeroDeAlunos; index+=1){

    ListaAlunos.push(index)
}


ultimo_elemento_lista = ListaAlunos[ListaAlunos.length-1]

if (ultimo_elemento_lista%2 == 0){
    console.log("O número de alunos é", (ultimo_elemento_lista),", portanto é PAR!")
}
else{
    console.log("O número de alunos é", (ultimo_elemento_lista),", portanto é IMPAR!")
}