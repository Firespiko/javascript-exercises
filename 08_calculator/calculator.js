const add = function(a , b) {
  return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arr) {

	return  arr.reduce((total,currentItem) =>{
    return total + currentItem;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((total,currentItem) =>{
    return total * currentItem;
  },1);
};

const power = function(a , b) {
  return a ** b;
};

const factorial = function(a) {
  if((a == 0) || (a == 1)){
    return 1;
  }
  
  let factorialValue = 1;
  for(let num = 1; num <= a; num++){
    factorialValue *= num;
  }
  return factorialValue
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
