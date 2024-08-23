# html e css e js

IDE-SITE QUE VAI TE AJUDAR A DIGITAR CÓDIGO

comunicação de webserver e database continua

APLICAÇÃO WEB

- HTML
- CSS
- JS( é mais pro lado do cliente do que pro servidor, ele é executado no browser do cliente)

esqueleto html

html

head- estrutura o código

dentro dele se tem o meta charset =”UTF-8” que permite que o código seja entendido, é essencialmente um conjunto de caracteres;

o title que sera o titulo do cabeçlho

e os link- esses links são essencialmente usados para fazer a ponte entre o html e o css, nesse primeiro momento.

body

irá conter o que sua tela irá mostrar, ou seja o código.

### qual o problema de se colocar o link do js no head?

Devemos lembrar que o programa segue uma estrutura de leitura, então em um mundo perfeito o programa irá ler primeiro o html, sua cabeça, para saber como traduzir aquilo, após isso ele irá entender como tudo esta estilizado e depois ele vai ler o código para eu saber o que quero transmitir, nesse caso o JavaScript insere o desenvolvimento no código, faz com que ele se torne dinâmico, então se pensarmos no código como um ser humano coloca-lo no head, não seria errado, mas seria como mandar seu corpo andar sem saber para onde. Por isso e por questões de boas práticas é mais aconselhável colocarmos o link do js no final.

### Como começar no js?

console.log(’meu nome é —-’)

e ele vai mostrar no console da página.

### Variáveis

vc tem um dado e quer referenciar ele varias vezes

a variável é o dado que você pode chamar

tipos  primitivos

- string
- number
- booleano(sim/não)

como criar uma variável?

n é necessário identificar o tipo de variável

**let** firstName = ‘Andre’;

**const** age = 30;
**var** isStudent = true;

### concatenando

console.log(’meu nome é” **+** firstName);

console.log(’firstName’)

### Como fazer aparecer na minha tela?

let firstName = prompt(’Digite o seu nome: ’)

prompt: prompt é uma função que envia uma mensagem, retorna como string para o usuário.

### o que é uma FUNÇÃO?

Executa uma sequência de tarefas, no caso códigos.

### Convertendo uma string para numero

let age =  **parseInt** prompt(’digite sua idade : ’)

age = age + 2

Converte tudo que esta ali dentro para Int(que é a identificação da variavel) no caso number

***// comenta o código no js*** 

### CONSTANTE

variável que seu valor não pode ser mudada.

const Nome = (’sam’)

### array

é uma lista, com termos mais  bonitos podemos dizer que é um banco de dados, onde cada item tem um número , que começa do 0 ao infinito, arrays são dinâmicas, não estáticas

### click
O valor que ele recebe é a função que será executada já que ela é passada diretamente na tag de abertura.

Em JavaScript declaramos uma função chamando-a pelo nome e em seguida adicionamos parênteses após o identificador da função(o nome da mesma).

let compras = **[**’pão’, ´queijo´,´laranja´**]**

## css- background, fontes e cores

### background

body {

background-color: purple;

background-image:url;

}

### fontes + cores

h1{

font-size: 50px;

color:blue;

font-family:—vai mostrar os tipos de fonte;

}

FlexBox
Quando se descreve o flexbox como sendo unidimensional, enfatiza-se o fato de que ele lida com o layout em uma dimensão de cada vez - seja uma linha ou uma coluna

flex-direction define a direção do eixo principal e pode tem quatro valores possíveis:

    row
    row-reverse
    column
    column-reverse



### Celsius e Fahreinheit

```jsx
let celsius= 0
```

```jsx
let fahrenheit = 0
```

```jsx
celsius = parseFloat(prompt ('digite a temperatura em Celsius:'))
```

```jsx
fahrenheit = celsius *1.8 +32
```

```jsx
alert('a temperatura de farenheit: ' + fahrenheit.toFixed(2))
```

### IF AND ELSE

```jsx
let grade = prompt('Digite a nota do aluno:')

if(grade >100){
    alert('nota invalida')
}
else if (grade >= 90){
    alert('aluno nota A')
}
else if (grade >= 80){
    alert('aluno nota B')
}
else if (grade >= 70){
    alert('aluno nota C')
}
else if (grade >= 60){
    alert('aluno nota D')
}
else {
    alert('sem nota para passar')
}
```

Posso votar?

```jsx
let idade = prompt('digite sua idade;')
let temTitulo = prompt('tem titulo de eleitor?sim/não')
let idadeMinima = 18

if(idade >= idadeMinima && temTitulo == 'sim') {
   alert('você pode votar') 
}
else if(idade >= idadeMinima && temTitulo =='não'){
    alert('você tem que tirar o titulo para votar')
}
else if (idade<idadeMinima && temTitulo=='sim'|temTitulo == 'não'){
    alert('você não tem idade para votar')
}
```

Calculadora de Porcentagem

```jsx
let valorConta =0
let gorjeta =0
let valorTotal=0

 valorConta =parseFloat( prompt('Digite o valor da conta:'))
 gorjeta = parseFloat(prompt('Digite a goreta(decimal)%:'))

// gorjeta = (valorConta * gorjeta)/100
// valorTotal= valorConta + gorjeta

valorTotal = valorTotal + valorConta
valorTotal = valorTotal +(valorConta*gorjeta/100)

 alert('o valor total da gorjeta é de $' + valorTotal)
```