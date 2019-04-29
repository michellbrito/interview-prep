def sortArrayByParity(array):
   
    even = []
    odd = []
    for x in array:
        if x % 2 == 0:
            even.append(x)
        else:
            odd.append(x)
    A = even + odd
    print (A)
            

sortArrayByParity([3,1,2,4])

