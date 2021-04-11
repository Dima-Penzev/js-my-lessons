// const temp = function (massage, callback) {
//     console.log(massage);

//     console.log(callback);
//     callback(500);
// };

// const secondFn = function (number) {
//     console.log('This is log of secondFn', number);
// }

// temp('something', secondFn);

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// const add = function (x, y) {
//     return x + y;
// };

// const mult = function (x, y) {
//     return x * y;
// }

// doMath(2, 3, add);
// doMath(5, 3, mult);

// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     }

//     return innerFunction;
// }

// const fnB = fnA(555);

// fnB();

// console.log(fnB);


const makeDish = function (shefName, dish) {
    console.log(`${shefName} cooks ${dish}`);
}

const makeShef = function (name) {
    const makeDish = function (dish) {
    console.log(`${name} cooks ${dish}`);
}

    return makeDish;
}