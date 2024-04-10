let parseInput=(element: number|string|boolean|null|undefined):void=>{
    console.log(Object.prototype.toString.call(element));
}
let num=11;
let str="Hehehe";
let boolean=true;
let nulls=null;
let undefind=undefined;
parseInput(nulls);
parseInput(boolean);
parseInput(num);
parseInput(undefind);
parseInput(str);
console.log(parseInput('number'));  
console.log(parseInput('string'));     
console.log(parseInput('null'));   
console.log(parseInput('undefined')); 
