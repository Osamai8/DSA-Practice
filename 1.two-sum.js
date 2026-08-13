// The question, in normal words
// You are given a list of numbers and one more number called the target.
// Somewhere in that list there are exactly two numbers that add up to the target. Your job is to find them and return their positions in the list, not the numbers themselves.
// You may assume there is exactly one answer, and you cannot use the same position twice.

// My Solution
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Optimal
function twoSum2(arr, target) {
    const seen = new Map();

    for (let i = 0; i <= arr.length - 1; i++) {
        const second = target - arr[i];
        if (seen.has(second)) {
            return [seen.get(second), i];
        }
        seen.set(arr[i], i);
    }
    return []
}

const numberIndexes = twoSum([5, 7, 3, 5, 10], 10)
console.log(numberIndexes);

