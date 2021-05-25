const numbersEl = document.getElementById('numbers');
console.log(numbersEl.children);
console.dir(numbersEl);

// const arrayOfChidren = Array.from(numbersEl.children);
const arrayOfChidren = [...numbersEl.children];
console.log(arrayOfChidren);

arrayOfChidren.forEach(elem => {
  console.log(elem);
  elem.textContent = 'hey';
  console.log(elem);
});

const titleEl1 = document.createElement('h2');
console.log(titleEl1);
titleEl1.textContent = 'Calculator1';
titleEl1.setAttribute('lang', 'en');
console.log(titleEl1.getAttribute('lang'));

// const titleEl2 = titleEl1.cloneNode(true);
// console.log(titleEl2);
// const titleEl3 = titleEl1.cloneNode(true);
// const titleEl4 = titleEl1.cloneNode(true);

const titleEl2 = document.createElement('h2');
titleEl2.textContent = 'Calculator2';
const titleEl3 = document.createElement('h2');
titleEl3.textContent = 'Calculator3';
const titleEl4 = document.createElement('h2');
titleEl4.textContent = 'Calculator4';

const resultEl = document.getElementById('result');
console.log(resultEl);

//МЕТОД ВСТРАИВАНИЯ ОДНОГО ЭЛЕМЕНТА
// resultEl1.insertAdjacentElement('beforebegin', titleEl1);
// resultEl1.insertAdjacentElement('afterbegin', titleEl2);
// resultEl1.insertAdjacentElement('beforeend', titleEl3);
// resultEl1.insertAdjacentElement('afterend', titleEl4);

//МЕТОД ВСТРАИВАНИЯ ОДНОГО И БОЛЕЕ ЭЛЕМЕНТА
//ЕСЛИ БОЛЬШЕ ОДНОГО ЭЛЕМЕНТА, ТО МЫ ИХ РАСПЫЛЯЕМ ПРИ ПЕРЕДАЧЕ (...)
// resultEl.before(titleEl1);
// resultEl.prepend(titleEl2);
// resultEl.append(titleEl3);
// resultEl.after(titleEl4);

const arrayOfTitles1 = [titleEl1, titleEl2];
console.log(arrayOfTitles1);
const arrayOfTitles2 = [titleEl3, titleEl4];
console.log(arrayOfTitles2);

resultEl.before(...arrayOfTitles1);
resultEl.prepend(...arrayOfTitles2);
// resultEl.append(...arrayOfTitles1);
// resultEl.after(...arrayOfTitles2);

function makeElements(element, value) {
  const divsEl = value.map(elem => {
    const divEl = document.createElement(element);
    divEl.textContent = elem;
    console.log(divEl.textContent);
    return divEl;
  });
  return divsEl;
}

const result = makeElements('div', ['a', 'b', 'c', 'd', 'e']);
console.log(makeElements('div', ['a', 'b', 'c', 'd', 'e']));
resultEl.append(...result);

resultEl.addEventListener('click', e => {
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);

  if (e.target.textContent === 'c') {
    e.target.style.color = 'green';
  } else {
    e.target.style.color = 'red';
  }
});

const navList = `<ul><li><a>home</a></li><li><a>about</a></li><li><a>contacts</a></li></ul>`;

resultEl.insertAdjacentHTML('beforebegin', navList);
// resultEl.innerHTML = navList;

const formEl = document.getElementById('form');
console.log(formEl);

const array = [];

const newObj = formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  // console.log(e);
  e.preventDefault();
  // console.log(e.target);
  // console.log(e.target.elements);
  // console.log(e.target.elements.name);
  // console.log(e.target.elements.password);
  // console.dir(e.target.elements.name);
  // console.log(e.target.elements.name.value);
  // console.log(e.target.elements.password.value);

  const object = {
    name: e.target.elements.name.value,
    password: e.target.elements.password.value,
  };

  const { name, password } = e.target.elements;
  const obj = { name: name.value, password: password.value };
  console.log(obj);
  array.push(obj);
  console.log(array);
  name.value = '';
  password.value = '';
  return array;
}

const array1 = [
  {
    title: 'notre dame de paris',
    url: 'https://i.pinimg.com/originals/f3/40/f4/f340f42241a91966444229a51ec07ac6.jpg',
    author: 'victor hugo',
  },
  {
    title: 'code da vinci',
    url: 'https://www.babcockbooks.com/pictures/26675.jpg',
    author: 'dan brown',
  },
  {
    title: 'мастер и маргарита',

    url: 'https://knijky.ru/sites/default/files/styles/264x390/public/31583.jpg?itok=rm1YiVJV',
    author: 'Михаил булгаков',
  },
];

function createList(array) {
  console.log(array);
  return array.map(elem => {
    const item = document.createElement('li');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const author = document.createElement('p');

    img.setAttribute('src', elem.url);
    author.textContent = elem.author;
    title.textContent = elem.title;

    item.append(title, img, author);
    return item;
  });
}

const items = createList(array1);
console.log(items);

const ulEl = document.getElementById('books');
ulEl.append(...items);
