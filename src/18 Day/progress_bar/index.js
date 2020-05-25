'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('It works');
});

let value = 4;
const btnPlus = document.querySelector("#plus");

const knobElm = document.querySelector('#knob');
const knobElmStyleColor = knobElm.computedStyleMap().get('width');
console.log('all style',knobElmStyleColor);


btnPlus.addEventListener('click',() => {
  value +=1;
  console.log('clicked')
  const counterElm = document.querySelector('#counter');
  counterElm.textContent = value;

  const knobElm = document.querySelector('#knob');
  //let knobElmStyle = knobElm.style.get(['width']);
  //let knobElmStyle = getStyleRuleValue(knobElm);
  //let knobElmStyle = getComputedStyle(knobElm);
  //const knobElmStyle = knobElm.style.width;
  //const knobElmStyleColor = knobElm.style;
  console.log('width',knobElmStyle);
  console.log('all style',knobElmStyleColor);

  
})


