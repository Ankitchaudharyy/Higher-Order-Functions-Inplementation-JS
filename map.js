// Implementing Higher Order Function - map()

// map() definition 
// Two parameters : array - array of numbers
//                : func - SquareOfANumber
function map(array, func){
    var mappedArray = [];

    for(var idx=0; idx<array.length; idx++){
        mappedArray.push(func(array[idx]));
    }

    return mappedArray;
}

// map() execution
var result = map([1,2,3,4,5], SquareOfANumber);
console.log(result);

// Function to be applied.
function SquareOfANumber(number){ 
    return number*number;
}