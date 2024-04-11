let Square=(element:number|number[])=>{
    if (typeof element==='number') {
        return element**2;
    }else{
        return element.map((num)=> num**2);
    }
}
console.log(Square(2));
console.log(Square([2,2,2]))