//CADASTRO DE UM EVENTO:
//Permitir cadastro se a pessoa tiver idade>=18 e lista_convidados < X.
 
/* NA ATIVIDADE DIZ QUE A LISTA TERÁ 100 CONVIDADOS NO MÁXIMO, 
PORÉM VOU UTILIZAR O LIMITE DE PESSOAS SENDO 3 PARA FICAR MAIS FACIL DE TERMINAR A EXECUÇÃO DO PROGRAMA.*/
 
lista_convidados = []
 
let nome;
function validando_nome(){
 
  nome_valido = false
  nome = prompt("Nome: ")
  if (nome == ""){
    alert("Insira algum dado")
    validando_nome()
  }
  else{nome_valido = true;}
 
}
 
 
let idade;
function validando_idade(){
 
  idade = Number(prompt("Idade: "))
  idade_valida = false
 
  if (idade>=18){idade_valida = true}
 
  else if (idade == ""){
    alert("Insira sua idade!")
  }
  else if(idade<18){idade_valida = false; alert("Você não pode entrar no evento por ser menor de")}
 
  else{
    validando_idade()
  }
 
 
}
 
for (i=0; i<3 ; i+=1){
 
  validando_nome()
  validando_idade()
  if (nome_valido, idade_valida){
    lista_convidados.push(nome)
  }
  else{
    i -= 1
  }
 
}
 
 
 
alert(lista_convidados)