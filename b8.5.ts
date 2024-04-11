let unionEx=(element:number|string):void=>{
    console.log(element);
}
let intersectionEx=(element:number&string):void{
    console.log(element);
}
unionEx(5);
intersectionEx(10);
//không có biến nào đồng thời là number và string
