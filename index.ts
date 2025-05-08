//converting a string to uppercase if the boolean is true and lowercase if the boolean is false

function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
};

// Example usage:
const inputString = "India will loose the war";
const toUpperCase = true;
const formattedString = formatString(inputString, toUpperCase);
console.log(formattedString);
 

//Returning objects from the array of objects based on rating i.e rating > 4
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4);
};
// Example usage:
const items = [
    { title: "General Dynamics F-111", rating: 5 },
    { title: "Dassault Rafale", rating: 3 },
    { title: "Curtiss F8C", rating: 4.5 },
    { title: "	Republic F-84 Thunderjet", rating: 2 },
];
const filteredItems = filterByRating(items);
console.log(filteredItems);


//Combining multiple arrays of the same type into a single array using rest parameters
function concatenateArrays<T>(...arrays: T[][]): T[]{
    const result: T[] = [];

    // Looping through each array passed as argument
    for (const currentArray of arrays) {
      // Looping through each item inside the current array
      for (const item of currentArray) {
        result.push(item); // Adding each item to the result array
      }
    }
    return result;
}
// Example usage:
const array1 = ["Punjab", "Kashmir", "Northwest Frontier"];
const array2 = ["Balochistan", "Sindh", "Khyber Pakhtunkhwa"];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray); 



// Defining a Vehicle class as the core while using make and year properties(private) and a method to access them then extending the Vehicle class to add model property for cars also adding  a method to access it
class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

//Creating a Car class that extends the Vehicle class and adds a model property and a method to access it
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
     getModel(): string {
      return `Model: ${this.model}`;
    }
}
// Example usage:
const myCar = new Car("Mustang", 1969, "Ford");
console.log(myCar.getInfo());
console.log(myCar.getModel());



//Handling string or number input and returning either the string's length or doubling the number's value
function processValue(value: string | number): number{
    return typeof value === "string" ? value.length : value * 2;
}
// Example usage:
const stringValue = "Hello India, remember china!";
const stringResult = processValue(stringValue);
console.log(`String length: ${stringResult}`);
const numberValue = 1962;
const numberResult = processValue(numberValue);
console.log(`Doubled number: ${numberResult}`);


//Defining a Product's interface with name and price properties
interface Product {
    name: string;
    price: number;
}
  
// Finding the product with the highest price within an array of products
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    //reduce is used to find the product with the highest price
    return products.reduce((maxProduct, currentProduct) => 
      currentProduct.price > maxProduct.price ? currentProduct : maxProduct
    );
}
// Example usage:
const products = [
    { name: "tank", price: 9.4 },
    { name: "fighter jet", price: 470 },
    { name: "submarine", price: 8000 }
  ];
  
console.log(getMostExpensiveProduct(products));  
  

// Defining an enum for the days of the week and then creating a function that returns "Weekday" or "Weekend" based on the input day
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
// Function to determine if the day is a weekday or weekend
  function getDayType(day: Day): string {
    return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
}
// Example usage:
const today = Day.Friday;
console.log(`Day ${today} shouldn't be a ${getDayType(today)}`); 
  

//Defining an Async function that returns the square of a number after 1 second, or rejects if that's a negative number
async function squareAsync(n: number): Promise<number> {
    
    if (n < 0) {
      return Promise.reject(new Error("Negative numbers are not allowed"));
    }
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
}
// Example usage:
const numberToSquare = -5;
squareAsync(numberToSquare)
  .then(result => console.log(`Square of ${numberToSquare} is ${result}`))
  .catch(error => console.error(error.message));

  