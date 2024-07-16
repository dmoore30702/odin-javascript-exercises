const removeFromArray = function(inputArray, valuesRemove) {
    let arrayResult = [];

    let hashSet = new Set();

    for(let i = 0; i < valuesRemove.length; i++){
        hashSet.add(valuesRemove[i]);
    }

    for(let i = 0; i < inputArray.length(); i++){
        if(hashSet.has(inputArray[i]) == false){
            arrayResult = arrayResult.concat(inputArray[i]);
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
