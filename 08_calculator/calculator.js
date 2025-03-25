const add = function(a, b) {
 return a+b; 
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  if (array.length >= 1){
    const sum = array.reduce(add);
    return sum;
  }
	else{
    return 0;
  }
};

const multiply = function(array) {
  const product = array.reduce((total,value) => {return total * value}, 1);
  return product;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let total = 1;
  if(a==0){
    return 1;
  }
  else{
    for(a; a>=1; a--){
      total = total * a;
    }

    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
