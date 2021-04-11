// const toGetResult = function (a, b, callback) {
//     return callback(a, b);
// };

// const toGetSum = function (x, y) {
//     return x + y;
// }

// let result = toGetResult(4, 7, toGetSum);
// console.log(result);

// const toGetMult = function (x, y) {
//     return x * y;
// }

// result = toGetResult(6, 8, toGetMult);
// console.log(result);

// const toGetPow = function (x, y) {
//     return x ** y;
// };

// result = toGetResult(3, 8, toGetPow);
// console.log(result);


// const toLearnJs = function (value1, value2, value3, callback1, callback2, callback3) {
//    const x = callback1(value1);
//     const y = callback2(value2);
//     const z = callback3(value3);

//     return `${x}. ${y}. ${z}`;
// }

// const toRead = function (book) {
//     return `нужно читать ${book}`;
// };

// const toWrite = function (code) {
//     return `нужно писать ${code}`;
// };

// const toWatch = function (video) {
//     return `нужно смотреть ${video}`;
// };

// result = toLearnJs('JS for babies', 'application', 'Wed', toRead, toWrite, toWatch);
// console.log(result);

// result = toLearnJs('Docs', 'functions', 'Masterclass', toRead, toWrite, toWatch);
// console.log(result);


// const toDo = function (x) {
//     return `нужно делать ${x}`;
// }

// result = toLearnJs('homework', 'classwork', 'practise', toDo, toDo, toDo);
// console.log(result);

// const toLearnProgramming = function (array, func) {
//     console.log(array);
//     let value = '';

//     for (const elem of array) {
//         console.log(elem);
//         console.log(func(elem));
//     }
    
// }

// result = toLearnProgramming(['homework', 'classwork'], toDo);

// const product = {
//     name: 'apple',
//     weight: 1,
//     price: 20,
//     toChangeWeight(newWeight) {
//         return this.weight = newWeight;
//     },
//     toChangePrice(newPrice) {
//         return this.price = newPrice;
//     },
//     toChangeAllProps(value1 = 'product', value2 = 0, value3 = 0) {
//         this.name = value1;
//         this.weight = value2;
//         this.price = value3;
//         return (this.name, this.weight, this.price)
//     },
// };
// console.log(product);
// console.log(product.weight);
// console.log(product['price']);

// product.toChangeWeight(5);
// console.log(product);
// console.log(product.weight);
// console.log(product['price']);

// product.toChangePrice(50)
// console.log(product);
// console.log(product.weight);
// console.log(product['price']);

// const product1 = {
//     name: 'banana',
//     price: 60,
//     weight: 0,
// };

// const product2 = {
//     name: 'ananas',
//     price: 20,
//     weight: 100,
// };

// console.log(product1, product2);
// product.toChangePrice.call(product1, 80);
// console.log(product1, product2);

// product.toChangePrice.call(product2, 130);
// console.log(product1, product2);

// product.toChangeAllProps();
// console.log(product);

// const props = ['grape', 10, 100];
// product.toChangeAllProps.apply(product1, props);
// console.log(product1);

// const props2 = ['coconut', 50, 320];
// product.toChangeAllProps.apply(product2, props2);
// console.log(product2);




// const transform = {
//     name: 'Bambolbi',
//     speed: 100,
//     maxSpeed: 200,
//     charge: '65%',
// };

// transform.toLowCharge = function () {
//     this.charge = (parseInt(this.charge) - 1) + ' %';
//     console.log(this.charge);
// };
// transform.toLowCharge();

// transform.toUpCharge = function () {
//     this.charge = (parseInt(this.charge) + 1) + ' %';
//     console.log(this.charge);
// };
// transform.toUpCharge();

// transform.toUpSpeed = function (value) {
//     const { maxSpeed, speed } = this;
//     return maxSpeed <= speed + value ? speed += value : "скорость превышена";
        
// };

// console.log(transform.toUpSpeed(20));
// console.log(transform.speed);

// transform.toLowSpeed = function (a) {
//     const { speed } = this;
    
//     return speed <= 0 ? speed -= a : "не тормози";
       
// };
    
// console.log(transform.toLowSpeed(10));
// console.log(transform.speed);

// const user = {
//     _name: 'Georgy',
//     _age: 32,
//     _gender: 'male',
//     get name() {
//         return this._name;
//     },
//     set name(value) {
//         return this._name = value;
//     },
//     get gender() {
//         return this._gender;
//     },
//     set gender(value) {
//         return this._gender = value;
//     },
//     get age() {
//         return this._age;
//     },
//     set age(value) {
//         return this._age += value;
//     },
//     toDraw(image) {
//         // return `I draw ${image}`;
//         return `I draw ${image}`;
//     },
// };

// console.log(user);
// console.log(user.name);
// user.name = 'she';
// console.log(user.name);

// user.gender = 'female';
// console.log(user.gender);

// user.age = 1;
// console.log(user.age);

// const user1 = {
//     _name: 'Anna',
//     _age: 18,
//     _gender: 'female',
// };

// user.toDraw.call(user1);
// console.log(user.toDraw.call(user1, 'picture'));
// console.log(user.toDraw.call(user1, 'landscape'));

// const array = ['tree', 'house', 'road'];
// console.log(user.toDraw.call(user1, array));

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position + 1}-й в очереди.`;

};
const put = function (num, index) {
    return composeMessage.call(num, index);
 };
const messages = orders.map(put);
console.log(messages);