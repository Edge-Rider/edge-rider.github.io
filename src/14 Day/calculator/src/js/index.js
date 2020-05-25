'use strict';
console.log('It works!');

const plus_button = document.querySelector("#btn-plus");
console.log('plus_button'+plus_button);
let input_button = document.querySelector(".calc__input");
console.log('input_button'+input_button);
let output_button = document.querySelector(".calc__result");
console.log('output_button'+output_button);

const clear_button = document.querySelector("#btn-clear");



const add = () =>{
    console.log('clicked plus');
    output_button.textContent = Number(output_button.textContent + input_button.value);
    console.log('output_button'+output_button);
}



const clear = () =>{
    input_button.value = '0'
    output_button.textContent = '0'
}

plus_button.addEventListener('click',add);
clear_button.addEventListener('click',clear);