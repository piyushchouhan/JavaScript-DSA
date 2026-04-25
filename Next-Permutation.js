// Problem Statement
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order). The replacement must be in place and use only constant extra memory.
// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]

function nextPermutation(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    reverse(nums, i + 1);
}

function reverse(nums, start) {
    let left = start, right = nums.length - 1;
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

let nums = [1,2,3];
nextPermutation(nums);
console.log(nums); // Output: [1,3,2]

nums = [3,2,1];
nextPermutation(nums);
console.log(nums); // Output: [1,2,3]