# funções

é preciso invocar uma função para ela ser executada.

pode se instalar estruturas de programação dentro dela

## escopo: o que acontece dentro de uma função fica separado do escopo global

é parecido com C, onde nada acontece fora da main, no caso da função do js, coisas acontecem a parte dentro da função que estiver escrita, não quer dizer que serão chamadas o tempo todo e por isso cada uma tem um nome.

let e const qualquer bloco de código pode separar seu escopo, e os contextos, podendo ter escopos diferentes que não dependem de funções, deixando o codigo mais objetivo

## escopo aninhado

um escopo dentro de um escopo

“function( )

let=

if( )

let=”

## Arrow Functions

Outra forma de escrever funções, utilizada em frameworks modernos, porém não deve substituir as funções por completo

formam códigos mais sucintos

```jsx
const parOuImpar = (n)=> {
return n%2}
console.log(parOuImpar(3))
```

atrela ela a uma constante,  função é identificada pela seta ⇒

 

- se só tem um parâmetro podemos remover os parênteses do argumento e o return;
- se a expressão for pequena pode até ser feita em uma linha sem prejudicar a leitura do código;

## Argumentos opcionais

podemos chamar uma função sem o numero igual de parâmetros; undefined

## Argumentos com valor default

podemos pre-determinar um valor para um argumento;

## Closure

uma função que retorna outra função, uma função que se lembra do ambiente em que ela foi criada.

```jsx
function lembrarSoma(x){
```

```jsx
return function(y){
```

```jsx
return x  
```

```jsx
}
```

```jsx
}
```

```jsx
let soma1= lembrarSoma(2)
```

```jsx
console.log(soma1(5))
```

## Recursion

uma funcionalidade que permite uma função se chamar novamente;

isso pode ser um problema caso a função se chame muitas vezes.

```jsx
function retornarNumeroPar(n){
if (n % 2 == 0){
console.log('n agora é par: ' + n)}
else{
console.log(n)
retornarNumeroPar(n-1)
}
}
retornarNumeroPar(33);
```

## OBJETOS E ARRAYS

### array[ ]

Possibilidade de adicionar um conjunto de valores a uma variável

podemos acessar um array pelo seu índice, o primeiro índice sempre é 0

### propriedades( )

são informações que podem ser verificadas de um valor

null e undefined não possuem propriedades

### métodos

são propriedades que funcionam como funções, invocam os métodos da mesma maneira que funções

strings e arrays contém métodos;

### Objetos

uma coleção de ´propriedades, parecidos com arrays

podemos acessar essas propriedades

### adicionando e deletando propriedades de um objeto

```jsx
let carro ={
marca:"VW",
portas:"4",
eletrico:false,
motor:1.0
}
	console;log(carro.portas);
	delete carro.portas;
	console.log(carro.portas);
	carro.tetoSolar= true;
	console.log(carro.tetoSolar);
```

### Copiando propriedades de um objeto

para outro objeto

```jsx
let objetoA ={
prop1:"teste"

prop2:'testando'
}
let objetoB ={
prop3:"propriedade"

}
Object.assign(objetoA,objetoB);
console.log(objetoA);
```

### verificando as chaves de um objeto

```jsx
let objetoA ={
prop1:"teste"

prop2:'testando'
}
console.log(Object.keys(objetoA));
```

### mutação

Um objeto pode herdar todas as características do outro, virando uma referencia ao mesmo.

```jsx
let objetoA ={
pontos:10
}
objetoB = objetoA
let objetoC ={
pontos:10
}
console.log(objetoA == objetoB) //true
console.log(objetoA == objetoC) //false
```

# Prototypes

- um objeto fallback de outro objeto
- quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procurada no prototype deste objeto
- o prototype de um objeto criado do zero é o Object, que tem os metodos nativos da linguagem.
- quando criamos um objeto a partir de um outro, o base será o prototype
- ele herdara tanto os metodos e propriedades de object

# Classes

- o prototype do JS pode ser chamado de classe
- em outras linguagens uma classe é um molde de um objeto
- ou seja podemos criar diversos objetos em cima de um prototype
- não podemos adicionar propriedades na classe, a classe só aceita métodos.

## Construtor por função

são formas de instanciar uma classe em uma linguagem de programação

instanciar=criar um objeto novo

no construtor já podemos definir propriedades

let doberman = criarCachorro(”Doberman”)

## Construtor por New

let husky = new Cachorro(”Husky”)

utiliza-se o type

## Construtor na classe(ES6)

não precisamos mais criar através de uma função

n se utiliza o type

## Symbols

- propriedades únicas que não podem ser alteradas e nem criadas duas vezes.
- podemos utilizar como uma constante, só que para propriedade do objeto;

## get-

Serve para resgatar o valor de uma propriedade;

## set-

Serve para alterar o valor de uma propriedade;

## Herança

- uma classe pode herdar propriedades de outra classe por herança
- para isso utilizamos extends

## InstanceOf operator

podemos verificar quem é o pai do objeto

### Loops em Arrays

Como é uma lista com muitos valores, muitas vezes precisamos ver cada um deles;

```jsx
let numeros = [1,5,10,15,20,25]

for (Let i=0; i<= numeros.length; i++){
	console.log(numeros[i]);
}

```

### Métodos de array : push e pop

```jsx
let pessoas = ['Matheus','João','Ricardo']
let pessoaRemovida = pessoas.pop();
console.log(pessoas);
console.log(pessoaRemovida);
```

### Shift e Unshift

Shift:remove o primeiro elemento de um array;

Unshift: adiciona um ou mais elementos  no inicio de um array;

```jsx
let frutas =['maça','melão', 'uva'];
let frutaRemovida = frutas.shift();

console.log(frutas);
console.log(frutaRemovida);
```

Set-Uma forma eficiente de remover duplicados é utilizando o objeto `Set` do JavaScript. Um `Set` armazena apenas valores únicos.

```jsx
function removeDuplicates(array) {
  // Cria um Set a partir do array para obter os valores únicos
  const uniqueSet = new Set(array);

  // Converte o Set de volta para um array
  return [...uniqueSet];
}
```

### IndexOf e LastIndexOf

IndexOf:  encontra o índice de um determinado elemento;

lastIndexOf: encontrar o ultimo índice de um elemento;

```jsx
let numeros = [0,1,2,1,0]

console.log(numeros.indexOf(1))
console.log(numeros.lestIndexOf(1))
```

### Slice

Retorna um array a partir de outro array

o array retornado é determinado pelos parâmetros que são os índices de inicio e fim do novo array;

```jsx
let numeros =[0,1,2,3,4,5]
console.log(numeros.slice(2,3));
console.log(numeros.slice(3));
```

### ForEach

Itera cada elemento do array

```jsx
const nums = [1,2,3,4,5,6]

nums.forEach(num ⇒{

console.log(num);

});
```

### Includes

Verifica se o array tem um determinado elemento

```jsx
let carros = ['bmw','fiat','audi']
console.log(carros.includes('fiat'));
```

### Reverse

Inverte um array

```jsx
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.reverse());
```

## METODOS DE STRING:TRIM

remove tudo que não é string

```jsx
let texto = '\n teste \n'
console.log(texto.trim())

```

### padStart

inserir caracteres antes da string

```jsx
let milAoContrario = '1'
console.log(milAoContrario.padStart(4,"0"));
```

### Split

Divide uma string por um separador, e retorna um array

```jsx
let frase = 'O rato roeu a roupa do rei de roma'
let palavras = frase.split(" ")
console.log(palavras)
```

### Join

Junta elementos em um array em uma frase, por meio de um separador;

```jsx
let fraseMontada = palavras.join('<->');
console.log(fraseMontada);
```

### Repeat

repete uma string de acordo com um parâmetro number

```jsx
console.log('teste'.repeat(5));
```

## Rest Operator

- Uma forma de uma função receber indefinidos parâmetros;
- O operador rest vai virar um array;
- o parâmetro é definido por: …nome

```jsx
function imprimierNumeros(...args) {
for (let i=0; i<args.legth; i++){
console.log(args[i]);
}
}
```

## `Destructuring com Objetos`

`podemos definir variáveis com propriedades do objeto com uma notação diferente.`

```jsx
const person ={
name:'John'
lastname : 'Doe'
}
const {name:fname,lastname:lname}= person;
console.log(fname);
console.log(lname);
```

## Destructuring em Arrays

Podemos definir variaveis com os valores de um array utilizando o destructuring

```jsx
let nomes =['MAtheus', "joão",'Pedro']
let [nomeA,nomeB,nomeC] = nomes
console.log(nomeA)
console.log(nomeB)
console.log(nomeC)
```

## Json= JavaScript Object Notation

utilizado para comunicação entre serviços 

backend-frontend

um tipo de dado padronizado.

```jsx
{ "name":"Matheus",
"age":29,
"position": "Developer",
"languages": ["php", "javascript"]
}
```

Rigoroso na estrutura, segue-se o padrão imposto por este formato

apenas aspas duplas

não aceita comentários.

## Json para String

```jsx
const car = {
"brand": "BMW",
"wheels": 4,
"doors": 2,
"type":"Sedan"
}
let jsonToString = JSON.stringify(car);
console.log(jsonToString);
let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);
```
