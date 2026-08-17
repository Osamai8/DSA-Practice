// The question, in normal words
// You are given a bag of whole numbers in no particular order.

// Find the longest run of numbers that step up one at a time, like 1, 2, 3, 4, where every number in that run is somewhere in the bag. The numbers do not have to be next to each other in the array, and they do not have to be in order in the array.

// Return how long that run is, not the run itself.


function longestConsecutive(nums) {
    const set = new Set([...nums]);
    let best = 0;

    for (let num of set) {
        if (set.has(num - 1)) continue;
        let len = 1;
        while (set.has(num + len)) len++;
        if (len > best) best = len;
    }
    return best;
}

// num	| Is ()num - 1) in the Set?	| Start of a run?	| Counting forward	                | len | best
// 100	| 99, no	                |  yes	            | 101 missing, stop	                | 1	  | 1
// 4	| 3, yes	                |  no	            | skipped, no work done	            | -   | 1
// 200	| 199, no	                |  yes	            | 201 missing, stop	                | 1	  | 1
// 1	| 0, no	                    |  yes	            | 2 yes, 3 yes, 4 yes, 5 missing	| 4	  | 4
// 3	| 2, yes	                |  no               | skipped, no work done	            | -	  | 4
// 2	| 1, yes	                |  no               | skipped, no work done	            | -	  | 4

const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(result);