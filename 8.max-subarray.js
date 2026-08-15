// The question, in normal words
// You are given a list of numbers. Some are positive, some are negative.

// Pick a run of neighbours from that list: a starting position, an ending position, 
// and everything in between. Add up the numbers in that run.

// Out of every possible run you could pick, return the largest sum any of them produces. 
// You return the sum, a single number, not the run itself.

function maxSubArray(nums) {
    let max = nums[0];
    let running = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (running < 0) {
            running = nums[i];
        } else {
            running = nums[i] + running;
        }
        if (running > max) {
            max = running;
        }

    }
    return max;
}

const result = maxSubArray([-5, 22, 4, -7, 9, -12, 20, 3]);
console.log(result);