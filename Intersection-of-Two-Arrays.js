const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function intersection(arr1, arr2){
    let set1 = new Set(arr1);
    let result = new Set();

    for(let num of arr2){
        if(set1.has(num)){
            result.add(num);
        }
    }

    return Array.from(result);
}

rl.question('Enter the first array of numbers (separated by spaces): ', (input1) => {
    rl.question('Enter the second array of numbers (separated by spaces): ', (input2) => {
        let arr1 = input1.trim().split(/\s+/).map(Number);
        let arr2 = input2.trim().split(/\s+/).map(Number);

        if (arr1.some(isNaN) || arr2.some(isNaN)) {
            console.log("Please enter valid numbers.");
        } else {
            console.log("Intersection:", intersection(arr1, arr2));
        }
        rl.close();
    });
});