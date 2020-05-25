'use strict';
let user_text = prompt('enter your text');
let text_lenght = user_text.length;
let number_of_SMS = Math.ceil(text_lenght/160)
document.write('number of SMS:' + number_of_SMS)
