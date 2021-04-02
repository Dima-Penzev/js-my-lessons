// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel);
// console.log(keys);

// const values = Object.values(hotel);
// console.log(values);

// const entries = Object.entries(hotel);
// console.log(entries);

// for (const key in hotel) {
//     console.log('Key:', key);
//     console.log('Value:', hotel[key]);
// }

// const entries = Object.entries(hotel);
// console.log(entries);

// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);
// }


// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);

// console.log('values:', values);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);


/*===SPREAD OF ARRAY=== */

// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = Math.min(...temperatures);
// console.log('min temperature:', min);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const addHouses = [...houses, 'Jack'];
// console.log(addHouses);

// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];
// console.log(housesInDebt);

// const updatedHouses = [...houses.slice(0, 3), 'Jack', ...houses.slice(4),];
// console.log(updatedHouses);

// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];

// const newBatch = [...firstBatch, ...secondBatch];
// console.log('new batch:', newBatch);

/*===SPREAD OF OBJECTS=== */

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c);

// const d = { ...a, ...b };
// console.log(d);

/*===REST=== */

// const add = function (...args) {
//     console.log(args);
// }

// add(8, 9, 3);
// add(1, 2, 3, 4, 5, 6);

/*===DESTRUCTURESATION OF OBJECTS=== */

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name, stars, capacity } = hotel;
// console.log(name, stars, capacity);

// const { name = 'hotel', stars = 3, status = "empty" } = hotel;
// console.log(name, stars, status);

// const { stars, ...rest } = hotel;
// console.log(rest);


/*===DESTRUCTURESATION OF ARRAYS=== */

// const rgb = [200, 255, 100,];

// const [red, green, blue] = rgb;

// let red, green, blue;
// const [red, ...colors] = rgb;

// console.log(`Red: ${red}, Colors: ${colors}`);

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// const calculateTotalPrice = (productName) => {
//   for (const product of products) {
    
//       if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
// }

// console.log('total:', calculateTotalPrice('Захват'));

/*===TASK 21===*/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;
 

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


/*===TASK 24===*/
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки


  
//   for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//   rgbColors.push(rgb);
//   }


// console.log(hexColors);
// console.log(rgbColors);


const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const {name} = potions[i];
      
      if (name === potionName) {
        console.log(`${potionName} requires removal`);
        console.log(i);

        potions.splice(i, 1);
      }
      
    }
    return 'item is absent';
    

      
    
  
//     for (let i = 0; i < this.potions.length; i += 1) { 
//       const item = this.potions[i];
//     if (item.name.includes(potionName)) {
      
//       this.potions.splice(item, 1);
      
//     }
      
//    }
//     return `Зелья ${potionName} нет в инвентаре!`;
//  },

    // const potionIndex = this.potions.indexOf(potionName);

    // if (potionIndex === -1) {
    //   return `Зелья ${potionName} нет в инвентаре!`;
    // }

    // this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
      this.potions[i].name =  newName
      }
    }
       
      return `Зелья ${oldName} нет в инвентаре!`;
  },
};
console.log(atTheOldToad.getPotions());
atTheOldToad.removePotion('Дыхание дракона');