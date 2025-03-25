const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let a = 0
    let b = str.length-1;

    while (a <= b){
        if (str[a] == str[b]){
            a++;
            b--;
        }
        else{
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
