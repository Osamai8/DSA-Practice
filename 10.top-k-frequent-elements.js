// The question, in normal words
// You are given a list of numbers. Some numbers appear more than once.
// Frequency just means "how many times does this number appear in the list". The number 1 appearing three times has a frequency of 3.
// You are also given a number k. Return the k numbers with the highest frequency. 
// Return the numbers themselves, not their counts and not their positions.

// My Solution
function topKFrequent(nums, k) {
    let map = new Map();

    for (let n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .splice(0, k)
        .map(entry => entry[0]);
}

// Optimal
function topKFrequent(nums, k) {
    let map = new Map();
    const bucket = [];

    for (let n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
        bucket.push([]);
    }

    map.forEach((count, value) => bucket[count].push(value)); // bucket(elements are placed based on frequency to backtrack it and get tthe higgest): [ [], [], [ 3 ], [], [ 1, 2 ], [], [], [], [], [] ]

    const out = [];
    for (let i = bucket.length - 1; i >= 1; i--) {
        for (const c of bucket[i]) {
            out.push(c);
            if (out.length === k) return out;
        }
    }
}


const result = topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2);
console.log(result);