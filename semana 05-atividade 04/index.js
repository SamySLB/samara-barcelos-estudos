var Person = /** @class */ (function () {
    function Person(name, lastName, age, favoriteFoods) {
        this.age = age;
        this.favoriteFoods = favoriteFoods;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen = age >= 18;
        this.favoriteFoods = favoriteFoods;
    }
    Person.prototype.SetFullName = function () {
        return "".concat(this.name, " ").concat(this.lastName);
    };
    Person.prototype.showUserData = function () {
        return "seus dados s\u00E3o ".concat(this.age, ",  ").concat(this.favoriteFoods);
    };
    return Person;
}());
var Sam = new Person('Samy', 'Barcelos', 21, ['Carne']);
console.log(Sam.SetFullName(), Sam.showUserData());
