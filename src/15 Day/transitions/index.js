'use strict';

document.addEventListener('keyup',(event) =>{
    console.log(event)
    if (event.code === 'Space'){
        
        const boxElm = document.querySelector('.box');
        boxElm.classList.toggle('on')
    }
})

document.addEventListener('keyup', (event_a) =>{
    console.log(event_a)
    if(event_a.key === "a"){
        const boxElm = document.querySelector('.box');
        boxElm.classList.add('border')
    }
})


document.addEventListener('keyup', (event_r) =>{
    if(event_r.key === "r"){
        console.log(event_r)
        const boxElm = document.querySelector('.box');
        boxElm.classList.remove('border')
    }
})

document.addEventListener('keyup', (event_z) =>{
    if(event_z.key === "z"){
        console.log(event_z)
        const boxElm = document.querySelector('.box');
        boxElm.classList.toggle('rotate')
    }
})

document.addEventListener('keyup', (event_c) =>{
    if(event_c.key === "c"){
        console.log(event_c)
        const boxElm = document.querySelector('.box');
        boxElm.classList.toggle('loop')
    }
})