

// My solution
function groupAnagrams(strs) {
    let map = new Map();

    for (let s of strs) {
        const sorted = s.split("").sort().join("");
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        map.set(sorted, [...map.get(sorted), s]);
    }
    return [...map.values()];
}

// The key observation
// We aren't really trying to "group anagrams."
// We're trying to:
// Generate the same key for every anagram.
// Once we have that, the HashMap does the grouping for us.


// optiomal
function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const char of str) {
            const index = char.charCodeAt(0) - 97;          // 97: ASCII/Unicode code point of lowercase letters (a->97, b->98.....)
            count[index]++;                                 // Result: [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ]
        }

        const key = count.join("#");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return [...map.values()];
}


const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result);