/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    let object = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let array = [];

    for(let char of s){
        if(object[char]){
            array.push(object[char])
        } else {
            if(array.pop() !== char) return false
        }
    }

    return (!array.length)
};

//An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.