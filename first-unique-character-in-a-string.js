const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function firstUniqueCharacter(str) {
    const freq = {};

    for (let char of str) {
        if (char in freq) {
            freq[char] += 1;
        } else {
            freq[char] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] == 1) {
            return i;
        }
    }

    return -1;

}

rl.question('Enter a string: ', (str) => {
        const result = firstUniqueCharacter(str);
        console.log(`First Unique Character index: ${result}`);
        rl.close;
});

