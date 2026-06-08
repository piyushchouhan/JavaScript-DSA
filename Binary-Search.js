const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

rl.question('Enter sorted number seperated by space ',
    (arrayInput) => {
        const arr = arrayInput.trim().split(" ").map(Number);

        // ask the target
        rl.question('enter the target: ',
            (targetInput) => {
                const target = Number(targetInput);

                // perform the search
                const result = binarySearch(arr, target);

                if (result !== -1) {
                    console.log(`Target ${target} found at index ${result}.`);
                } else {
                    console.log(`Target ${target} not found.`);
                }

                rl.close();


            }
        )
    }
)