let seat = Number(prompt('Whats your seat?'));
document.write('the seat:'+seat);

let column = Math.floor(seat/10);
document.write('the column:'+column);

let row = seat%10;
document.write('the row:'+row);

let letter = String.fromCharCode(65+column);
document.write('the letter:'+letter);

document.write('the seat:'+letter+row)