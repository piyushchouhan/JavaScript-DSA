function topKFrequent(nums, K){
    let freqMap = new Map();

    // step 1 : count the frequency
    for(let num of nums){
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // min heap store [num, freq]
    const heap = [];

    function push(val){
        heap.push(val);
        heap.sort((a,b) => a[1] - b[1]);
    }

    // maintain the heap size of k
    for(let [num, freq] of freqMap.entries()){
        push([num, freq]);

        if(heap.length > K){
            heap.shift();
        }
    }

    return heap.map(item => item[0]);
}

console.log(topKFrequent([1,1,1,2,2,3], 2));