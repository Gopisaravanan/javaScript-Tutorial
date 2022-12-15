// filter method 

const students = [
    {id:1, fullname : "Gopi" , age:24 , city: "chennai"},
    {id:2, fullname : "saravanan" , age:21 , city: "madurai"},
    {id:3, fullname : "surya" , age:25 , city: "kovai"},
    {id:4, fullname : "ramana" , age:16 , city: "trichy"},
    {id:5, fullname : "sarath" , age:26 , city: "chennai"},
    {id:6, fullname : "logesh" , age:17 , city: "madurai"},
    {id:7, fullname : "vinoth" , age:20 , city: "erode"},
    {id:8, fullname : "vanidass" , age:29 , city: "kovai"},
]

let result = students.filter((value) => value.age <= 22 );

let result2 = students.filter ((value) => value.city === "chennai")

console.log(result);

console.log(result2);