'use strict';

const handleClick = () => {
  const btnElm = document.querySelector('#buy-btn');
  const quantityElm = document.querySelector('#quantity');
  const quantity = Number(quantityElm.value);
  btnElm.textContent = quantity + ' pieces in cart';
  btnElm.className = 'btn--done';
}