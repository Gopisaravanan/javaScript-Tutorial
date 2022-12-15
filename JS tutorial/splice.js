// splice

const bike = () => {
    const bikes = ["pulsar","royal enfield" , "duke" , "rx100", "suzuki"]
    
    const selectedBikes = bikes.splice(1,3)
    
    
    console.log(selectedBikes);
    
    console.log(bikes);  // this console for find the  difference between slice and splice 
    }
    
    bike();
    
    // splice
    const foodItems = () => {

        const foods = ["idly","dosa","pongal","vada","fried rice"]
        foods.splice(3,0,"briyani")
        console.log(foods);
    }
    foodItems();