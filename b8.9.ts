type NumberOrStringOrArray = number | string | any;

const checkInput = (input: NumberOrStringOrArray): number | void => {
    if (typeof input === 'number') {
        return input ** 2; 
    } else if (typeof input === 'string') {
        return input.length; 
    } else if (Array.isArray(input)) {
        return input.length;
    }
}

console.log(checkInput(1000)); 
console.log(checkInput("HEhehehe")); 
console.log(checkInput([1, 2, 3])); 
console.log(checkInput(true));