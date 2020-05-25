


second_field = 0

let button_clicked = () => {
    let first_field = document.querySelector(".first").value;
    second_field = 0
    let second_field = document.querySelector(".second").value;

    console.log("first field value is:"+first_field);
    console.log("second field value is:"+second_field);


    let sum=first_field+second_field;
    console.log("sum value is:"+sum);

    second_field.value = sum;
    console.log("second field after calculation value is:"+second_field);

    
    
    console.log(second_field);
    //first_field.value = 0

} 