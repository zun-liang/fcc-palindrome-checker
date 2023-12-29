# freeCodeCamp - Build a Markdown Previewer

This is a solution to the [Build a Palindrome Checker Project on freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-palindrome-checker-project/build-a-palindrome-checker).

### What I learned

- [String.prototype.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
- Different from React, where to put functions and variables matter in vanilla JavaScript projects. For example, at first, I listed "const text = textInput.value" as one of the few declarations in script.js. However, the returned text value will always be empty string, because it is already executed before I can access input's value.
- I also had a minor bug, which is, in fCC, the path of script.js should be "./script.js" while in local folder, the path should be "/script.js".
- One more thing to pay attention to is that either "onclick" attribute in HTML elements or "addEventListener("click", function)" will work.
