

## take in a string

# turn that string into a array

#loop through that array

#loop through that array again in order to compare the first and second letter

# return true if all letters don't repeate, return false if more than one letter
#is the same



def isUnique(userString):

    for i in range(0,len(userString)):
        for j in range(i+1,len(userString)):
            if userString[i] == userString[j]:
                return False

    return True
            
                
            
isUnique("testing")
