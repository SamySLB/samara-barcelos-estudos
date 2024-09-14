//exercicio 01

interface Person {
    name: string;
    lastName: string;
    age:number ;
    isOlderThanEighteen: boolean;
    favoriteFoods: string[];
  }
  class Person implements Person{
    constructor(name:string,lastName:string,public age:number,public favoriteFoods:string[]){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen= age >= 18;
        this.favoriteFoods= favoriteFoods;

    }
    SetFullName():string{
      return `${this.name} ${this.lastName}`
    }

    showUserData():string{
        return `seus dados são ${this.age},  ${this.favoriteFoods}`;
    }
  }

  const Sam = new Person('Samy','Barcelos', 21,['Carne'])

  console.log(Sam.SetFullName(), Sam.showUserData());
