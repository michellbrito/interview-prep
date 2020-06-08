
# Write a function that takes in two strings and returns true if the second string is substring of the first, and false otherwise.

# Examples:
# Input: laboratory, rat
# Output: true

# Input: cat, meow
# Output: false


def isSubstring(str1, str2):
    start = 0
    end = len(str2)
    str_split_1 = list(str1)
    str_split_2 = list(str2)

    for i in str_split_1:
        current_window = str_split_1[start:end]
        if (len(str_split_2) == 0):
            return False
        if current_window == str_split_2:
            return True
            break

        start = start + 1
        end = end + 1

    return False

print(isSubstring("laboratory", "rat"))
print(isSubstring("cat", "meow"))
print(isSubstring("cat", ""))
