//task1
function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(average(1, 2, 3)); 
console.log(average(10, 20, 30)); 
console.log(average(5, 15, 25)); 


//task2
function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(average(1, 2, 3)); 
console.log(average(10, 20, 30)); 
console.log(average(5, 15, 25)); 
//task3 

const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;


const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;


console.log(celsiusToFahrenheit(0));    
console.log(celsiusToFahrenheit(25));   
console.log(celsiusToFahrenheit(-10)); 

console.log(fahrenheitToCelsius(32));  
console.log(fahrenheitToCelsius(77));   
console.log(fahrenheitToCelsius(14)); 


// task4
let count = 3;

const countPlusOne = () => {
    count += 1;
    console.log(count);
};


countPlusOne(); 
countPlusOne(); 
countPlusOne(); 


//task 5 
function totalSum(priceItem, amountItem, discountItem) {
  const discountMultiplier = 1 - (discountItem / 100);
  return priceItem * amountItem * discountMultiplier;
}


const price = 25000;
const quantity = 3;
const discount = 20;

console.log(totalSum(price, quantity, discount)); 