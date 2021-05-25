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

// const Manager = function (name = 'manager', sales = 0, storage) {
//     this.name = name;
//     this.sales = sales;
//     this.storage = storage;

//     this.sell = function (product) {
//         for (let i = 0; i < storage.length; i += 1) {
//             const elem = storage[i];
//             if (elem === product) {
//                 storage.splice(i, 1);
//                 this.sales += 1;
//                 return `Manager ${this.name} sold ${product}`;
//             }
//         }
//     };
// };

// const storage = ['tv', 'audiosystem', 'smartphone', 'laptop'];
// const garik = new Manager('Garik', 12, storage);
// console.log(garik.sales);
// console.log(garik.sell('tv'));
// console.log(garik.storage);
// console.log(garik.sell('laptop'));
// console.log(garik.storage);
// console.log(garik.sales);

//ЗАДАЧА №7
//  function StringBuilder(baseValue) {
//     this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//     return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//     return this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//     return this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//     return this.value = str + this.value + str;
// };

// const builder = new StringBuilder('.');
// console.log(builder.getValue());
// builder.padEnd('^');
// console.log(builder.getValue());
// builder.padStart('^');
// console.log(builder.getValue());
// builder.padBoth('=');
// console.log(builder.getValue());

//ЗАДАЧА 9
// function changeEven(numbers, value) {
//   const newArray = [];
//   console.log(numbers);

//   numbers.forEach((number, index) => {
//     newArray.push(number);
//     if (number % 2 === 0) {
//       newArray.splice(index, 1, (number += value));
//     }
//   });

//   return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//TASK 10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

//TASK 11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки

// const titles = books.map(book => book.title);
//   console.log(titles);

//TASK 21
// const getFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);

//TASK 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce(
//     (total, player) => total + player.playtime / player.gamesPlayed, 0
// );

// console.log(totalAveragePlaytimePerGame);

//TASK 39
// const sortByDescendingFriendCount = users =>
//   [...users].sort(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length,
//   );

//TASK 41
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// console.log(names);

//TASK 42

// const getNamesSortedByFriendCount = users =>
//   [...users]
//     .sort(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length,
//     )
//     .map(user => user.name);

//TASK 43
// const getSortedFriends = users => [...users]
// .flatMap(user => user.friends)
// .filter((friend, index, array) => array.indexOf(friend) === index)
// .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));

//TASK 44
// const getTotalBalanceByGender = (users, gender) => users
// .filter(user => user.gender === gender)
// .reduce((total, user) => total + user.balance, 0);

// const isSquare = function (n) {
//     if (Number.isInteger(Math.sqrt(n))) {
//         return true;
//     } return false;

// };

// console.log(isSquare(25));

// const isIsogram = (str) => {
//     return str.match();
// };

// console.log(isIsogram("Dermatoglyphics"));  //== true
// console.log(isIsogram("aba")); //== false
// console.log(isIsogram("moOse")); //== false
// console.log(isIsogram("123456"));


// const noSpace = function (x) {
//     const newArray = [];

//     for (const elem of x.split('')) {
//         if (elem !== ' ') {
//             newArray.push(elem);
//         }
//     }
//     return newArray.join('');
// };

// const noSpace = function (x) {
  
//     return x.split(' ').join('');
// };

// console.log(noSpace('fffffh hfh fh ffhf fffhh'));

const filter_list = function (l) {
    const newArray = [];

    for (const elem of l) {        
        if (typeof elem === 'number') {
            newArray.push(elem);
        };
    };
    return newArray;
};

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

console.log(filter_list([1, 2, 'a', 'b']));  //== [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])); //== [1,0,15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); //== [1,2,123]

