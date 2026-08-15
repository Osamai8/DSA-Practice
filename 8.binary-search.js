// The question, in normal words
// You are given a list of numbers that is already sorted from smallest to largest, and one more number called the target.

// Find where the target sits in the list and return its position, which is called its index. 
// If the target is not in the list at all, return -1.

// The catch is that you are not allowed to just look at every element. You have to do it in O(log n) time, 
// which in practice means you must throw away half of what is left on every single step.

function binarySearch(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

const result = binarySearch([-5, 2, 4, 7, 9, 12, 20, 33], 12);
console.log(result);