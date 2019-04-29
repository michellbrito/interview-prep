def reverseWords(s):
    stringReverse = s.split(" ")
    stringReverse.reverse()
    stringReverse = " ".join(stringReverse)[::-1]
    return stringReverse

reverseWords("Word")
