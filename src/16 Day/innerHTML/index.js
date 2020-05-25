'use strict';
const list  = [
    'apples',
    'orange',
    'milk',
    'tomatoes',
]

const listElm = document.querySelector('.shoppingList');

list.forEach((item) => {
    listElm.innerHTML += ('<li>' + item + '</li>');
});


list.forEach((item,index) =>{
    listElm.innerHTML += `<li> added wit backtick the ${index}° item of array that is ${item}`
});
