const checkType = (variable: any): void => {
    if (typeof variable === 'number') {
        console.log("Number");
    } else if (Array.isArray(variable)) {
        console.log("Array");
    } else if (typeof variable === 'object') {
        console.log("Obj");
    } else if(typeof variable === 'number'){
        console.log("String");
    }
}
checkType(1);
checkType("hehehehehe");
checkType({country:"VN"});
checkType([12,34,56]);