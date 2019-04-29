def plusOne(digits):
    
    if (digits >= 9):
        digits = digits + 1
        listOfString =  (str(digits)[0],str(digits)[1])
        listofInt = []
        for i in range(len(listOfString)):
            t = int(listOfString[i])
            listofInt.append(t)
        print (listofInt)
    else:
        digits[len(digits)-1] = digits[len(digits)-1] + 1
        



plusOne(9)
