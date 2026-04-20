function groupAnagrams(words){
    let map = new Map();

    for(let word of words){
        let key = word.split('').sort().join('');
        if(!map.has(key)){
            map.set(key, [])
        }else{
            map.get(key).push(word);
        }
    }

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));