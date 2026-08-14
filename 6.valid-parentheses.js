// The question, in normal words
// You are given a string made only of these six characters: ( ) [ ] { }.
// Return true if every opening bracket is closed by the matching closing bracket, and the brackets close in the right order. Return false otherwise.
// "The right order" means brackets nest like Russian dolls. A bracket you opened later must be closed before a bracket you opened earlier.


function isValidParantheses(s) {
    const pairMap = {
        "}": "{",
        "]": "[",
        ")": "(",
    };
    const stack = [];
    for (let char of s) {
        if (char === "{" || char === "[" || char === "(") {
            stack.push(char);
        } else {
            const t = stack.pop();
            if (t !== char) return false;
        }
    }
    return stack.length === 0;
}
const result = isValidParantheses("{}{}{{[{([])}]}}");
console.log(result);