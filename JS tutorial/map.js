// Map 

const numbers = [7,12,14,6,4]

let result = numbers.map((value) => value * 10);

console.log(result);

// reference type 

const state = [
    {id:1, captital:"chennai" , state : "tamilnadu"},
    {id:1, captital:"bangalore" , state : "karnataka"},
    {id:1, captital:"mumbai" , state : "maharashtra"},
    {id:1, captital:"thiruvanandapuram" , state : "kerala"},
]

let capitalCity = state.map((value) => {
    return [value.captital,value.state].join(" is capital of ")
});

console.log(capitalCity);