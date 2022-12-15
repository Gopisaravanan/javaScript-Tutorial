// Reduce method

const marks = [90,85,99,76,92];

let total = marks.reduce((acc,curr) => acc + curr ) ;

console.log(total);


//reduce method in reference type

const student = [
    {id:1 , subject : "tamil" , mark :185},
    {id:2 , subject : "english" , mark :190},
    {id:3 , subject : "maths" , mark :180},
    {id:4 , subject : "physics" , mark :170},
    {id:5 , subject : "chemistry" , mark :150},
    {id:6 , subject : "biology" , mark :145},
]

let result = student.reduce((acc,curr) => {
    return acc + curr.mark 
},0);


console.log(result);
    