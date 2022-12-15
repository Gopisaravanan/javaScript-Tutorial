// sorting reference type

const students = [
    {id:1, fullname : "Gopi" , age:24 , city: "madurai"},
    {id:2, fullname : "saravanan" , age:21 , city: "chennai"},
    {id:3, fullname : "surya" , age:25 , city: "kovai"},
    {id:4, fullname : "ramana" , age:16 , city: "trichy"}
];

students.sort((a,b) => {
    if (a.fullname < b.fullname) ;

    if (a.fullname > b.fullname) ;

    });

    console.log(students);


