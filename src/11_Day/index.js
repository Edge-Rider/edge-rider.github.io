'use strict';
const birthYear = Number(prompt('Enter your year of birth:'));

const age = 2020 - birthYear;

document.write('Your age is ' + age);


const mph = Number(prompt('Enter velocity in miles per hour:'));

const kmh = Math.round(mph * 1.609344);

document.write('Velocity in km/h is ' + kmh);

const euros = Number(prompt('Enter amount in euros: '));

const crowns = Math.round(euros * 25.695);

document.write('Amount in crowns ' + crowns);

const sms = prompt('Enter your message: ');

const parts = Math.ceil(sms.length / 160);

document.write('We need ' + parts + ' parts');