const PI: number = Math.PI;
interface Square{
    sideLength:number;
} 
interface Circle{
    radius:number;
}

let calculateArea = (shape: Square | Circle): number => {
    if ('sideLength' in shape) {
        return shape.sideLength ** 2;
    } else if ('radius' in shape) {
        return Math.PI * shape.radius ** 2;
    } else {
        throw new Error("Invalid object type");
    }
}
let Square1 :Square={
    sideLength:10,
}
console.log(calculateArea(Square1))