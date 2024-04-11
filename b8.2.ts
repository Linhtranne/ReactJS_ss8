type a={
    name: string;
    age :number;
    address:object;
}
function validatePerson(a1:any):boolean {
    return typeof a1.name === 'string' &&    typeof a1.age === 'number' &&      typeof a1.address === 'object';
}
let person1:a={
    name: 'linh',
    age: 18,
    address:{
        country:'Viet Nam',
        City: 'Ha Noi'
    }
}
console.log(validatePerson(person1));

