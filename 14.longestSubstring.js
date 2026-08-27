// The question, in normal words
// You are given a string, for example "abcabcbb".

// A substring is a stretch of characters that sit next to each other in the original string, with nothing skipped. 
// In "abcabcbb" the stretch "bca" is a substring because those three characters are neighbours. 
// The stretch "acb" is not, because you had to skip a character to build it.

// Find the longest such stretch in which no character appears twice, 
// and return how many characters long it is. 
// For "abcabcbb" the answer is 3, because "abc" is three characters with no repeats and nothing longer manages that.


// Sliding Window + Set/Map
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
const sample = "pwwkew";


const result = lengthOfLongestSubstring(sample);
console.log(result);