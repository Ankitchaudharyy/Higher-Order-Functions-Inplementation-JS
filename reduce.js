// Implementing Higher Order Function - reduce()

// reduce() definition 
// Two parameters : array - array of numbers
//                : func - addNumbers
                //   : accumulator - initial value
function reduce(iterable, func, accumulator){  
    for(let ele of iterable){
        accumulator = func(accumulator, ele);
    }

    return accumulator;
}

// Function to be applied.
function addNumbers(accumulator, number){
    return accumulator + number;
}

// reduce() execution
var result1 = reduce([1,2,3,4,5], addNumbers, "");
var result2 = reduce([1,2,3,4,5], addNumbers, 0);

console.log(`Result1 : ${result1}`);
console.log(`Result2 : ${result2}`);

// Result1 : 12345
// Result2 : 15