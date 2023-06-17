// ################################################
// Find Total Unique Elements/Counts

var uniqueCounts = function(array) {
    const hashmap = {}
    for (const char of array) {
        if (hashmap[char]) {
            hashmap[char] += 1;
        } else {
            hashmap[char] = 1;
        }
    }
    return {uniqueLetters: Object.keys(hashmap), uniqueLettersCount: hashmap};
};

uniqueCounts(['a','n','a','b','a','d']);

// ################################################