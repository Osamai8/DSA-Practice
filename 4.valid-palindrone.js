// The question, in normal words
// You are given a piece of text. Ignore every space, comma, full stop and any other symbol. Ignore whether the letters are capital or small.
// After ignoring all of that, does the text read the same forwards and backwards? Return true if it does and false if it does not.
// A word or a sentence that reads the same in both directions is called a palindrome. "racecar" is one. "race a car" is not.

// My Solution
function isPalindrone(string) {
    const chars = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== chars[chars.length - 1 - i]) return false;
    }
    return true;
}

// Optimal: two poitner
function isPalindrone(string) {
    let left = 0;
    let right = string.length - 1;
    const isAlNum = (c) => /[a-z0-9]/i.test(c);

    while (left < right) {
        while (left < right && !isAlNum(string[left])) left++;
        while (left < right && !isAlNum(string[right])) right--;

        if (string[left].toLowerCase() !== string[right].toLowerCase()) return false;

        left++;
        right--;
    }
    return true;
}

const status = isPalindrone("A man, a plan, a canal: Panama");
console.log(status);