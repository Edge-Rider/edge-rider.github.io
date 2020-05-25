'use strict';
let hours = [1,2,3,4,5,6,7];
console.log('last sunday worked ',hours[6],' hours');

const days = ['monday','tuesday','wensday','thursday','friday'];

days.push('saturday');

days.push('sunday');

console.log(days[0]);
console.log(days[2]);
console.log(days[5]);

console.log(days.length);

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

console.log(numbers.length);
console.log(numbers[13]);
console.log(numbers[Math.floor(numbers.length/2)]);

for(let i = 0; i < numbers.length;i++){
    console.log(numbers[i])
}

for(let i = 0; i < numbers.length;i++){
    console.log(Math.sqrt(numbers[i]))
}


for(let i = 0; i < numbers.length;i++){
    
    if (numbers[i] < 0){
        console.log('negative number',numbers[i]);
    }
    
}
for(let i = 0; i < numbers.length;i++){
    
    if (numbers[i] < 0){
        console.log('absolute value number',numbers[i]*-1);
    } else{
        console.log('absolute value number',numbers[i]);
    }
    
}
for(let i = 0; i < numbers.length;i++){
    
    if (numbers[i] === -10){
        console.log('index',i);
    } 
    
}

for(let i = 0; i < numbers.length;i++){
    
    if (numbers[i] % 2 === 0){
        console.log('even number',numbers[i]);
    }
    
}
for(let i = 0; i < numbers.length;i++){
    
    
    console.log('minus 5',numbers[i]-5);
        
}

for(let i = 0; i < numbers.length;i++){
    
    
    console.log('minus 5 squared',Math.sqrt(numbers[i]-5));
        
}
//number 9
let count = 0
for(let i = 0; i < numbers.length;i++){
    
    
    if (numbers[i] < 0){
        count++;
    } 

}
console.log('nevative values count',count);

//number 10
count = 0;
for(let i = 0;i < numbers.length;i++){
    
    count += numbers[i];

}
console.log('sum of numbers',count);

//11 Compute the average of the numbers in the array. Answer: 3.68421...
count = 0;
for(let i = 0;i < numbers.length;i++){
    
    count += numbers[i]/numbers.length;

}
console.log('Average',count);

//12 Compute the sum of all the positive numbers in the array. 
count = 0
for(let i = 0; i < numbers.length;i++){
   
    if (numbers[i] > 0){
        count += numbers[i];
    } 
}

console.log('sum of positive numbers',count);

//Output all the numbers which are greater than their predecessor in the array. 
for(let i = 0; i < numbers.length;i++){
   
    if (numbers[i] > numbers[i-1]){
        console.log(numbers[i],'is greater than',numbers[i-1]);
    } else{
        console.log(numbers[i],'is NOT greater than',numbers[i-1]);
    } 
}
//Output all the peaks in the array. A peak is a number whose predecessor and successor are both smaller than the number itself. 

for(let i = 0; i < numbers.length;i++){
   
    if ( numbers[i-1] < numbers[i] > numbers[i+1]){
        console.log(numbers[i],'is is a peak');
    } else{
        console.log(numbers[i],'is NOT a peak');
    } 
}
//First, compute the average number in the array and save the result in a variable. Then compute the sum of squared differences from the average
count = 0;
let average = 0;
let sum_of_sqrt_difference = 0
for(let i = 0;i < numbers.length;i++){
    
    count += numbers[i]/numbers.length;
    average = count/numbers.length;

}
for(let i = 0;i < numbers.length;i++){
    
    sum_of_sqrt_difference += (numbers[i]*numbers[i])-average;
    //console.log(sum_of_sqrt_difference);
    

}

console.log('Sum of sqaured difference',sum_of_sqrt_difference);


