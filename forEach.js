// Implementing Higher Order Function - forEach()

// forEach() definition 
// Two parameters : iterable - array of numbers
//                : func - CubeOfANumber
function forEach(iterable, func){
    var transformedArray = [];
    for(let ele of iterable){
        transformedArray.push(func(ele));
    }

    return transformedArray;
}

// Function to be applied.
function CubeOfANumber(number){
    return number*number*number;
}

// forEach() execution
var result = forEach([1,2,3,4,5], CubeOfANumber);
console.log(result);

// [ 1, 8, 27, 64, 125 ]