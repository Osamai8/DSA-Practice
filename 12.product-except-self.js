// The question, in normal words
// You are given an array of numbers. Build and return a new array of the same length.

// The value you put at position i of the new array is the result of multiplying together every number in the original array except the one at position i.

// Two rules make it a real question. You may not use division, and the whole thing must run in O(n) time,
//  meaning the work grows in step with the size of the array and no faster.



// my solution
function productExceptSelf(nums) {
    const answer = [];
    const normalize = (n) => n === 0 ? 0 : n;
    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                answer[i] = normalize(nums[j] * (answer[i] ?? 1));
            }
        }
    }
    return answer;
}

// optimal 
function productExceptSelf(nums) {
    const res = new Array(nums.length);
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;                           // get the products of all the left elems
        prefix = prefix * nums[i];
    }

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= suffix;                         // then left * right
        suffix = suffix * nums[i];
    }
    return res;
}

// space: O(1)
// time : O(n)

// Brute force
// O(n²)
//    ↓
// Separate left/right information
//    ↓
// Prefix + suffix
//    ↓
// Two passes
//    ↓
// O(n) time
const result = productExceptSelf([1, 2, 3, 4, 5]);
console.log(result);