/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hashTable)
            return true;
        hashTable[nums[i]] = 1;
    }
    return false;

};

let test1 = [1, 2, 3, 1];
let test2 = [1, 2, 3, 4]

// using a hash table to search for duplicates in an array 