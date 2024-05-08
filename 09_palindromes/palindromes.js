const palindromes = function (sentence) {
    let regex = /[,.! ]/g;
    let characterString = sentence.replace(regex, "");
    characterString = characterString.toLowerCase();
    if(characterString.split("").reverse().join("") === characterString){
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
