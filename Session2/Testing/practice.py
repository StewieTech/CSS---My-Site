text = "abcdefgaaa"
lst = list(text)
lst2 = []
count = 0

for letter in text:
    lst2.append(letter)
    if letter == "a":
        count += 1
    



print(text)
print(lst)
print(lst2)
print(count)