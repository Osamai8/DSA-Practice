// The question, in normal words
// You are given an array of numbers. Some of them are zero.
// Push every zero to the end of the array, and let all the other numbers slide towards the front. The non-zero numbers must stay in the same order they were already in.
// You must change the array you were given, not build and return a new one. That is what "in place" means.

// My Solution
function moveZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);  // splice has O(n) of there own, so this whole loop becomes O(n2)
            arr.push(0);
        }
    }
    return arr;
}

// Optimal
function moveZeroes2(arr) {
    let insertPos = 0;

    for (let i = 0; i < arr.length; i++) { // this will bring all non zeroes to left ([ 1, 3, 12, 0, 12 ])
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }

    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++
    }
    return arr;
}
const result = moveZeros([0, 1, 3, 0, 12]);
console.log(result);