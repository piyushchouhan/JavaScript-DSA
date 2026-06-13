const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertionSort(arr) {
    for(let i = 1; i < arr.length;i++){
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead
        // of their current position
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = key;
    }
}

rl.question('Enter numbers separated by space: ', (input) => {
    let arr = input.trim().split(/\s+/).map(Number);
    
    if (arr.some(isNaN)) {
        console.log("Please enter valid numbers.");
    } else {
        insertionSort(arr);
        console.log("Sorted array: " + arr);
    }
    
    rl.close();
});

