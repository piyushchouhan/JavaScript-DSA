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


console.log(intersection([1,2,2,1], [2,2]));