'use strict';
const button = document.querySelector(".main__button");



 

const changeColor = () => {
    console.log('clcked');

    let red = document.querySelector('#red').value;

    let green = document.querySelector('#green').value;

    let blue = document.querySelector('#blue').value;

    let alpha = document.querySelector('#alpha').value;

    let rgbColor;

 

    if (red > 255 || green > 255 || blue > 255) {

        alert('Number cannot be higher than 255!');

    } else if (red < 0 || green < 0 || blue < 0) {

        alert('Number cannot be lower than 0!');

    } else if (alpha < 0 || alpha > 1) {

        alert('Alpha has to be between 0 and 1!');

    } else {

        rgbColor = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';

    }

    document.querySelector('#wrapper').style.background = rgbColor;
    document.querySelector('.main').innerHTML = rgbColor;

}

button.addEventListener('click',changeColor);