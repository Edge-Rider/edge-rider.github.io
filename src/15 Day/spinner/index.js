'use strict'

setTimeout(() => {
  const spinnerElm = document.querySelector('#spinner');
  spinnerElm.style.display = 'none';

  const imgElm = document.querySelector('#image');
  imgElm.style.display = 'block';
}, 4000);