# Write a function that reverses a string.

# Example:
# Input: "hello"
# Output: "olleh"


def reversedStr(intput_str):

    reversed_str = ""
    reversed_list = []

    # loop through the string
    for i in intput_str:
        # append the current char to the front of the list
        reversed_list.insert(0, i)

    # join the list of strings into a string
    reversed_list = reversed_str.join(reversed_list)
    #  return the reversed_str
    return reversed_list


print(reversedStr("hello"))
