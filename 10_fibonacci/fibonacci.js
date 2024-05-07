const fibonacci = function(term) {
    if(term == 0){
        return 0;
    }

    if(term < 0){
        return "OOPS";
    }
    
    if((term == 1) || (term == 2)){
        return 1;
    }
    firstTerm = 1;
    secondTerm = 1;
    thirdTerm  = firstTerm + secondTerm;

    if(term === 3){
        return thirdTerm;
    }

    while((term - 3) > 0){
        firstTerm = secondTerm;
        secondTerm = thirdTerm;
        thirdTerm = firstTerm + secondTerm;
        term--;
    }

    return thirdTerm;
};

// Do not edit below this line
module.exports = fibonacci;
