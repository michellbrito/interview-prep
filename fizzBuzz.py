def fizzBuzz(n):
    array = []
    for x in range(1,n+1):
        if (x % 3 == 0) and (x % 5 == 0):
            array.append("FizzBuzz")
        elif x % 3 == 0:
            array.append("Fizz")
        elif (x % 5 == 0):
            array.append("Buzz")
        else:
            array.append(str(x))
    return (array)


fizzBuzz(15)
