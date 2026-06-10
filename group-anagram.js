const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function groupAnagrams(words){
    let map = new Map();

    for(let word of words){
        let key = word.split('').sort().join('');
        if(!map.has(key)){
            map.set(key, [word])
        }else{
            map.get(key).push(word);
        }
    }

    return Array.from(map.values());
}


rl.question('your input: ',
    (input) => {
        const words = input.trim().split(" ");

        const result = groupAnagrams(words);
        console.log("grouped anagrams: ", result);
        rl.close;
});
