const repeatString = function(string,num) {
    //Used for throwing error if a negative number is entered
    if (num < 0){
        return "ERROR";
    }
    
    repeatedString = "";
    for(let i = 0;i < num; i++){
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
