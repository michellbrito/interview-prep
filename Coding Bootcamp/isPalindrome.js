// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

function isPalindrome(str) {
    if (str.split("") == str.split("").reverse().join()){
        return true;
    } else {
        return false;
    }
};

