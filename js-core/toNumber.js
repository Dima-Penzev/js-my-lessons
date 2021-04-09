//=== TO NUMBER ===//
//любое строчное значение к числу
let value = 'Bla Bla';

//1 способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2 способ
toNumber = +value;
console.log(`${value}, через унарный плюс: `, toNumber);
console.log(`тип данных ${value}, через унарный плюс: `, typeof toNumber);

//любое строчное число к числу
value = '123';

//1 способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2 способ
toNumber = +value;
console.log(`${value}, через унарный плюс: `, toNumber);
console.log(`тип данных ${value}, через унарный плюс: `, typeof toNumber);
