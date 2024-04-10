const PI: number = Math.PI;
interface Square{
    kind: "Square",
    sideLength:"Number"
}
interface Circle{
    kind: "Circle",
    radius: "Number"
}
function caculateArena(shape: any):number{
    if(shape.kind === "Square"){
        return shape.sideLength **2;
}else if(shape.kind === "Circle"){
    return PI*(shape.radius**2);
}
}
