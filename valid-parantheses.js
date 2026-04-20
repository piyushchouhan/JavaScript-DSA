function isValid(s){
    let stack = [];
    const map = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for(let char of s ){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        }else{
            if(stack.length !== 0 && stack.pop() !== map[char]){
                return false;
            }
        }
    }

    return stack.length === 0;
}



console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true