// The question, in normal words
// You are given two strings. Return true if the second string is just the first string with its characters shuffled into a different order, and false otherwise.
// Shuffled means nothing is added, nothing is removed, and nothing is swapped for a different character. Every character has to appear in both strings the same number of times.
// "listen" and "silent" are anagrams. Both hold one l, one i, one s, one t, one e and one n.

// My Solution
function validAnagram(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (let char of t) {
        if (!map.has(char)) return false;

        map.set(char, map.get(char) - 1);

        if (map.get(char) < 0) return false;
    }

    return true;

}

const result = validAnagram("aab", "bcc");
console.log(result);