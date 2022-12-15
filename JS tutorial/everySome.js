// Testing array - primitive data types
// every & some


// every - its check every element all element is true then give true

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let even = numbers.every((value) => {
    return value % 2 === 0;
});

console.log(even);


// some - its also check all element but some element is true then its return value true

let isEven = numbers.some((value) => value % 2 === 0)

console.log(isEven);