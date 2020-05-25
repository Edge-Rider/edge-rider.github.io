const square =(number) => number*number;
const hypotenuse = (a,b) => Math.sqrt(square(a)+square(b));
const abs = (number) => {
    if (number >= 0){
        return number;
    };
    return -number;
}

const emailFromLogin = (string) => string+"@codeboot.com";
const loginFromName = (first,last) =>{
    let part1 = last.substr(0,5)
    let part2 = first.substr(0,3)
    return part1.toLowerCase()+part2.toLowerCase()
}

const emailFromName = (first,last) =>{
    let part1 = loginFromName (first,last);
    let part2 = emailFromLogin(part1);
    return part2;
}

const salary = (pay,hours,days) =>pay*hours*days;

const taxed_salary = (salary , tax) => salary*(1-tax);

const spread3 = (a,b,c) => {

}