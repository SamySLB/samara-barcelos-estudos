//exercicio 2
function Id() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
var result = Id(1, 2, 3, 4, 5);
console.log("soma", result);
//exercicio 3
function PrintVar(val) {
    console.log(val);
}
var arr = [1, 2, 'samanta', 3];
PrintVar(arr);
PrintVar(arr.reverse());
//exercicio 04
function Person(age, list) {
    if (age !== undefined) {
        return age * age;
    }
    else if (list && list.length > 0) {
        return list.map(function (num) { return num * num; });
    }
}
console.log(Person(undefined, [1, 2, 3, 5]));
console.log(Person(12, [1, 2, 3, 4, 5]));
