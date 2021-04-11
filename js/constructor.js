//===HOTEL===//

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName} welcome to ${this.name}`);
//   };

//   this.addGuest = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuest = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Astoria', 3, 400);
// console.log(hotel);

// hotel.greet('Aristarh');
// hotel.addGuest(50);
// console.log(hotel);
// hotel.removeGuest(20);
// console.log(hotel);

//===SHOP MANAGER===//

// const mango = {
//     name: 'Mango',
//     sales: 5,
//     sell(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}`;
//     },
// };

// console.log(mango.sell('Iphone'));
// console.log(mango.sell('Playstation'));
// console.log(mango.sales);


// const poly = {
//     name: 'Poly',
//     sales: 3,
//     sell(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}`;
//     },
// };

// console.log(poly.sell('vacumcleaner'));
// console.log(poly.sales);

// const Manager = function (name = 'manager', sales = 0) {
//     this.name = name;
//     this.sales = sales;

//     this.sell = function (product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}`;
//     };
// };

// const garik = new Manager('Garik', 12);
// console.log(garik.sales);
// console.log(garik.sell('shaurma'));
// console.log(garik.sales);

// const anzorik = new Manager('Anzorik', 25);
// console.log(anzorik.sales);
// console.log(anzorik.sell('kebab'));
// console.log(anzorik.sales);

const Manager = function (name = 'manager', sales = 0, storage) {
    this.name = name;
    this.sales = sales;
    this.storage = storage;

    this.sell = function (product) {
        for (let i = 0; i < storage.length; i += 1) {
            const elem = storage[i];
            if (elem === product) {
                storage.splice(i, 1);
                this.sales += 1;
                return `Manager ${this.name} sold ${product}`;
            }   
        }  
    };  
};

const storage = ['tv', 'audiosystem', 'smartphone', 'laptop'];
const garik = new Manager('Garik', 12, storage);
console.log(garik.sales);
console.log(garik.sell('tv'));
console.log(garik.storage);
console.log(garik.sell('laptop'));
console.log(garik.storage);
console.log(garik.sales);