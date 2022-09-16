// ATIVIDADE ENCONTRO REMOTO 1: 
// PRAZO 13/09


let ListaDePecas = []

let limite_de_pecas = 3 // Insira ao lado (3) o valor que você gostaria que fosse o limite da lista.
                        //Está declarado como (3) para ser mais facil de conferir o funcionamento do programa!

                       
elementos_lista = false // se for FALSE significa que o limite_de_pecas na lista já foi atingido;
peso_necessario = false // se for FALSE significa que o peso da peça não estava dentro do parametro de 100 gramas e não será adicionado; 
tamanho_nome = false // se for FALSE significa que o tamanho do nome da peça não está nos conformes (>3 letras)

c = 0

while ( c !=3 ){
  

  var peca = prompt("Digite o nome da peça para ser adicionado a lista: ")
  if (peca.length < 3){
      
    alert("O nome da peça tem que ter mais de 3 caracteres.")
    tamanho_nome = false
    while (peca.length < 3 || peca == null){
      var peca = prompt("Digite o nome da peça para ser adicionado a lista: ")
    }

  }
  else{
    tamanho_nome = true
  }
  var peso = prompt("Informe o peso do(a) " + peca + ", o peso deve ser informado em gramas: ")
  if (peso < 100){
    alert("A peça " + peca + " não cumpriu com o parametro de peso acima de 100 gramas!")
    continue

  }else{
    peso_necessario = true
  }
  
  

  if (ListaDePecas.length < limite_de_pecas){ //

    elementos_lista = true

    if (peso_necessario == true, tamanho_nome == true, elementos_lista == true){
      
      ListaDePecas.push(peca)
      alert(peca + ", foi adicionada(o) á lista!")
      c += 1
    }
    else{
      alert("A peça não foi adicionada pois não cumpriu algum dos parametros!")
    }

    


  }else{
    elementos_lista = false
    if (c==3){
      break

    }
  }

}

alert("A lista já tem " + limite_de_pecas + " itens cadastrados!")
alert("Obrigado por utilizar o programa de cadastro!")

i = 0

for (var i=0; i < ListaDePecas.length; i++){
  alert(ListaDePecas[i] + ".")

}

