// finding element in reference types

const students = [
    {id:1, fullname : "Gopi" , age:24 , city: "madurai"},
    {id:2, fullname : "saravanan" , age:21 , city: "chennai"},
    {id:3, fullname : "surya" , age:25 , city: "kovai"},
    {id:4, fullname : "ramana" , age:16 , city: "trichy"},
    {id:5, fullname : "sarath" , age:26 , city: "chennai"},
    {id:6, fullname : "logesh" , age:17 , city: "madurai"},
    {id:7, fullname : "vinoth" , age:20 , city: "erode"},
    {id:8, fullname : "vanidass" , age:29 , city: "kovai"},
]

let result = students.find((student) => student.city === "chennai")
    

console.log(result);


// finding index

let result2 = students.findIndex((student) => student.age === 16 )

console.log(result2);

