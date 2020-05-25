'use strict';
const ratingStars = document.querySelectorAll('.rating__star');

/*console.log(ratingStars);

const activateStar = (item,index) => {
    item[index].classList.toggle('rating__star--on');
    
    console.log('test');

}

ratingStars.forEach((item,index) => {
    item.addEventListener('click',activateStar(item,index));
});
*/

const starElm = document.querySelectorAll('.rating__star');

starElm[0].addEventListener('click',() => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 1;
    starElm[0].classList.add('rating__star--on');
    starElm[1].classList.remove('rating__star--on');
    starElm[2].classList.remove('rating__star--on');
    starElm[3].classList.remove('rating__star--on');
    starElm[4].classList.remove('rating__star--on');
    console.log(valueElm);
});