const sumAll = function(firstNum,secondNum) {
    
    if((firstNum < 0) || (secondNum < 0) || 
    (typeof firstNum != 'number') || (typeof secondNum != 'number')){
        return "ERROR";
    } 

    let upperLimit = 0
    let lowerLimit = 0;
    let sum = 0;
    
    if(firstNum > secondNum) {
        lowerLimit = secondNum;
        upperLimit = firstNum;
    }

    else {
        lowerLimit = firstNum;
        upperLimit = secondNum;
    }
    
    for(let num = lowerLimit;num <= upperLimit;num++){
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
