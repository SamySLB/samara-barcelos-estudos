//Fazendo o computador escolher um número aleatorio de 1-100, 
//lembrando de utilizar o floor para não devolver uma fração.
//let computerNumber

//function init(){
 // computerNumber = Math.floor(Math.random() * 100 +1)
 // console.log(computerNumber)
//}

//fazendo o computador armazenar os numeros que eu tentar adivinhar.
//o numero vem dá página, da identificação, no caso getElementById, e pega o valor
//e ele joga, ou melhor dizendo puxa para a lista
//importante, colocar onchange no html no inputbox,colocar o nome da função(), para ele chamar a função compareNumbers, e o html 
//entender como essa ligação de tentativas e caixa está sendo feita.

//let computerNumber
//let userNumbers = []

//function init(){
 //   computerNumber = Math.floor(Math.random() * 100 +1)
  //console.log(computerNumber)
 //}
 
 //function compareNumbers(){
   // const userNumber = Number(document.getElementById('inputBox').value)
    //userNumbers.push(' ' + userNumber)
    //document.getElementById('guesses').innerHTML = userNumbers
 //}

 //Adicionando If e Else, fazendo o computador 
 //me dizendo se está perto ou longe do que tem que se adivinhar.
 //também vamos melhorar um pouco o código, fazendo ele mesmo apagar a parte da box
 //numero de tentativas e fazer o botão de novo jogo funcionar
 //LEMBRANDO QUE PRO JOGO FICAR INTERESSANTE COLOQUE O CONSOLE.LOG EM ANOTAÇÃO

 let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame(){
  window.location.reload()
}

function init(){
    computerNumber = Math.floor(Math.random() * 100 +1)
  console.log(computerNumber)
 }
 
 function compareNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if(attempts< maxGuesses){

      if(userNumber > computerNumber) {
         document.getElementById('textOutput').innerHTML = 'Your Number is too High'
         document.getElementById('inputBox').value = ''
         attempts++
         document.getElementById('attempts').innerHTML = attempts
      }
      else if(userNumber < computerNumber){
          document.getElementById('textOutput').innerHTML = 'Your Number is too low'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
      }
      else{
          document.getElementById('textOutput').innerHTML = 'Congratulation'
          attempts++
          document.getElementById('attempts').innerHTML = attempts
          document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly')
      }}
      else{
          document.getElementById('textOutput').innerHTML = 'You lose!The number is ' + computerNumber
          document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly')
        }
 }

