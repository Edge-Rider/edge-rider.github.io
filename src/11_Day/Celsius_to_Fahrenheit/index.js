'use strict';
let user_data = prompt('insert temperature in Fahrenheit');
user_data = Number(user_data.replace(".",","));
let tempC = Math.round((user_data - 32) * (5/9));
document.write('temp in C:'+ tempC);