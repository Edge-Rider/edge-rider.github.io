'use strict';

const expense = [
    {
    name : 'peter',
    item : 'toilet paper',
    amount : 70,
    },  
    {
    name : 'jade',
    item : 'beer',
    amount : 20,
    },  
    {
    name : 'martin',
    item : 'chips',
    amount : 7,
    }

]  

console.log(expense[0].name)


const course = {
    title : 'programming',
    duration : 20,
    price : 2000,
    discPrice : 12,
    lessons : [
        {
            topic: 'introduction',
            teaser : 'start programming',
        },
        {
            topic:'variables',
            teaser:'working with data'
        }
    ]
}
console.log(course.title)
console.log(course.lessons[0].topic)
