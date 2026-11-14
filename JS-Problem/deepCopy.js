function deepClone(value){
    if(value === null || typeof value !== 'object'){
        return value;
    }
    if(Array.isArray(value)){
        return value.map(deepClone);
    }

    const clonedObj = {};
    for (const key in value ){
        if(Object.hasOwn(value, key)) clonedObj[key] = deepClone(value[key]);
    }
    return clonedObj;
}

// flatten an Array

[1, [2, [3, [4]]]].flat(Infinity);   // [1, 2, 3, 4]

// Manual
function flatten(arr){
    return arr.reduce(
        (acc, x) => acc.concat(Array.isArray(x) ? flatten(x): x),
        []
    )
}

// Implement myFilter as Array.prototype.myFilter, the same way myMap is written above. Remember filter keeps items where the callback returns truthy.
Array.prototype.myFilter = function(callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}

[1, 2, 3, 4, 5].myFilter(x => x % 2 === 0); // [2, 4]
// This is the array because it’s called as arr.myFilter, so this is [1, 2, 3, 4, 5] in this case.
// The callback is called with the current value, index, and the array itself.
// If the callback returns a truthy value, we push the current value to the result array.
// Finally, we return the result array containing all elements that passed the filter condition.

// Ques 2: You type fast in a search box, and the debounced function has delay = 300.
// You type “a”, then “b” 100ms later, then “c” 100ms later, then stop. How many times does the search function run, and with what argument?

// Answer: The search function will run only once, with the argument "abc".
// The debounce function delays the execution of the search function until 300ms have passed since the last keystroke.
//  Since you typed "a", "b", and "c" within 200ms, the debounce timer resets each time, and the search function is called only after you stop typing for 300ms.

