// Find the contiguous subarray (containing at least one number) which has the largest sum, and return its sum
// Kadane's algorithm

function maxSubArray(nums){
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for(let i = 0; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum+nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));