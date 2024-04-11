interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    Id: string;
}

const employees: Employee = {
    name: "Linh",
    age: 18,
    employeeId: "10102005"
};

console.log(employees.name); 
console.log(employees.age); 
console.log(employees.Id); 