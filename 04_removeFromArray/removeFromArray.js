const removeFromArray = function(integerArray, ...removedArray) {
    const uniqueIntegerSet = new Set();
    const duplicates = [];

    integerArray.forEach(item => {
    if (uniqueIntegerSet.has(item)) {
        duplicates.push(item);
    } else {
        uniqueIntegerSet.add(item);
    }
    });

    uniqueIntegerArray = Array.from(uniqueIntegerSet);

    for(const element of Array.from(removedArray)) {
        
        if (uniqueIntegerArray.indexOf(element) == -1){
            continue;
        }
        
        uniqueIntegerArray.splice(uniqueIntegerArray.indexOf(element),1);
    }
    return uniqueIntegerArray;
};

// Do not edit below this line
module.exports = removeFromArray;
