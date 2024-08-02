const letterCasePermutation = (s) => {
    const result = [];

    const backtrack = (path, index) => {
        if (index === s.length) {
            result.push(path);
            return;
        }

        const char = s[index];

        // If it's a letter, we have two options: uppercase and lowercase
        if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
            // Option 1: Add the lowercase version and move to the next character
            backtrack(path + char.toLowerCase(), index + 1);

            // Option 2: Add the uppercase version and move to the next character
            backtrack(path + char.toUpperCase(), index + 1);
        } else {
            // If it's not a letter, just add it as is and move to the next character
            backtrack(path + char, index + 1);
        }
    }

    // Start backtracking from the first character with an empty path
    backtrack('', 0);

    return result;
}

// Example usage:
const input = "a1b2";
const output = letterCasePermutation(input);
console.log(output); // Output: ["a1b2", "A1b2", "a1B2", "A1B2"]
