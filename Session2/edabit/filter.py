def filter_string(txt):
    special = 0
    lower = 0
    upper = 0
    number = 0
    for unit in txt:
        if unit.islower() == True:
            lower += 1
        if unit.isupper() == True:
            upper += 1
        if unit.isnumeric() == True:
            number += 1
        else:
            special += 1
    return [lower, upper, number, special]

print(filter_string("*$(#Mu12bas43hiR%@*!"))

