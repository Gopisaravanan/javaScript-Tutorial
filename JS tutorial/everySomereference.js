// Testing array - reference data types
// every & some
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


// every - its check every element all element is true then give true

let result1 = students.every((value) => {
    return value.city === "chennai"
});

console.log(result1);

// some - its also check all element but some element is true then its return value true

let result2 = students.some((value) => value.city === "chennai");

console.log(result2);