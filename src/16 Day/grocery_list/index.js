'use strict';
let grocery_list = [
    'apples',
    'banana',
    'milk',
    'bread',
];

const listElm = document.querySelector('#list');

grocery_list.forEach((element) => {
    listElm.innerHTML += `<div class="item">${element}</div>`;
});