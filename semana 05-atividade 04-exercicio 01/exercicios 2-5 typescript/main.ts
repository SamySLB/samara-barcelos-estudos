
//exercicio 2
function Id(...numbers:number[]):number{
 return numbers.reduce((acc,curr) => acc + curr,0)
 }

 const result:number= Id(1,2,3,4,5);
 console.log("soma", result);

 //exercicio 3
 function PrintVar<T>(val:T) {
  console.log(val);
  }
  let arr = [1,2,'samanta',3];
  PrintVar(arr);
  PrintVar(arr.reverse());

  //exercicio 04

function Person(age?:number, list?:number[]){
    if(age !== undefined){
        return age * age
    }
    else if(list && list.length > 0 ){
       return list.map(num => num * num)
        }
    } 
console.log(Person(undefined,[1,2,3,5]));
console.log(Person(12, [1,2,3,4,5]));
 