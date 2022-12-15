// sorting array

const numbers = [5,2,4,7,3,9,1,8];

let result = numbers.sort();

console.log(result);

// ACCI Value // charCodeAt()

const numbers2 = [8,12,3,62,13,25,7]

let acci = numbers2.sort();

console.log(acci);


// sorting decending order 

let result2 = numbers.sort((a,b) => b-a);

console.log(result2);

// reverse method

 let result3 = result2.reverse();

 console.log(result3);