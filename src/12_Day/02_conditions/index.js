'use strict';
let angle_1 = Number(prompt('Insert first angle'))
let angle_2 = Number(prompt('Insert second angle'))
let angle_3 = Number(prompt('Insert tird angle'))
let sum_angles = angle_1 + angle_2 + angle_3

if (sum_angles === 180){
    document.write("Yes! there's a triangle for data you inserted")

} else {
    document.write("there's no triangle for data you inserted")

}

let month = Number(prompt('Insert a month in number format (eg. 1 for January)'))

if (month === 11 || month === 4 || month === 6 || month === 9){
    document.write("30 days")
} else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
    document.write("31 days")

} else{
    document.write("28 days")
}


