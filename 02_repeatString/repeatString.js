const repeatString = function(string, amount) {
    if (amount < 0 ) {return "ERROR"};
    let stringResult = "";
    for(let i=0; i<amount; i++){
        stringResult = stringResult + string;
    }
   return stringResult; 
};

// Do not edit below this line
module.exports = repeatString;
