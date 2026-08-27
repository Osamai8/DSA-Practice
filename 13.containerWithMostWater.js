// The question, in normal words
// You are given an array of numbers called height. Picture each number as a vertical wall standing on a flat floor. 
// The wall at index 0 is 1 step from the wall at index 1, 2 steps from the wall at index 2, and so on.

// Pick any two walls. They form the two sides of a container. Pour water in. How much water does that container hold?

// Your job is to find the pair of walls that holds the most water, and return that amount as a single number. 
// You return the area, not the two indices.


// my solution
function maxWater(height) {
    let left = 0;
    let right = height.length - 1;

    let max = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const l = right - left;

        let current = l * h;

        if (current > max) {
            max = current;
        }

        if (height[left] > height[right]) {
            right--;
        } else if (height[right] > height[left]) {
            left++;
        } else {
            left++;
            right--;
        }
    }
    return max;
}

// optimal 
function maxWater(height) {
    let left = 0;
    let right = height.length - 1;

    let max = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        let area = (right - left) * h;

        if (area > max) {
            max = area;
        }

        if (height[left] > height[right]) right--;
        else left++;
    }
    return max;
}

const sample = [1, 8, 6, 2, 5, 4, 8, 3, 7];


const result = maxWater(sample);
console.log(result);