function swapCase(str) {
    var swappedStr = "";
  
    for (var i = 0; i < str.length; i++) {
      if (str[i] == str[i].toLowerCase()) {
        swappedStr = swappedStr + str[i].toUpperCase();
      } else {
        swappedStr = swappedStr + str[i].toLowerCase();
      }
    }
  
    return swappedStr;
  };