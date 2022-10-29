# lst = [3, 3, 3, 7, 3, 3]
lst = ["Google", "Apple", "Microsoft"]
# ["Apple", "Google", "Microsoft"]

# def unique(lst):
#     unique = 0
#     uniquelst = []
#     for i in lst:
#         print(i)
#         checki = i
#         checki2 = 
#         for j in lst:
#             checkj = j
#             print(j)
#             if checki != checkj:
#                 unique = i
#     print("No Unique Values")
#     return unique



# slst = sorted(lst)
# # print(slst)

# def unique(l):
#     newlist = sorted(l)[0] if sorted(l)[0] != sorted(l)[1] else "Nothing"       
#     # return sorted(l)[0] if sorted(l)[0] != sorted(l)[1] else sorted(l)[-1]
#     return newlist

# print(unique(lst))

# newlist = []
# def sort_by_length(l):
#     for word in l[i]:
#         newlist.append(word)
#         return newlist 

# print(lst[1])
# print(sort_by_length(lst))

# def sort_by_length(l):
#     return sorted(l, key=len)

# print(sort_by_length(lst))
numbers = [1,1,3]


    
# def equal(a, b, c):
# 	setnumbers = set([a,b,c])
# 	if len(setnumbers) == 1:
# 		return 3
# 	if len(setnumbers) == 2:
# 		return 2
# 	else:
# 		return 0

# print(equal(2,4,3))

# def equal(a,b,c):
#     setter = set(a,b,c)
#     return setter

# print(equal(2,2,3))



# def add_binary(a, b):
# 	answer = a + b
# 	return bin(answer)

# print(add_binary(1,2)[2:])


# def programmers(one, two, three):
# 	maxProg = max(one,two,three)
# 	minProg = min(one,two,three)
# 	return maxProg - minProg



# def century_from_year(year):
# 	return (year//100)

# print(century_from_year(2020))



# def solve_for_exp(a, b):
#     x = 0
#     while a ** x <= b:
#         expPro = x
#         x += 1
#     return expPro

# print(solve_for_exp(4, 1024))

# mRNA = {
# "A":"U", 
# "T":"A", 
# "G":"C",
# "C":"G"
# }


# def dna_to_rna(dna):
# 	for strand in dna:
# 		if 

dna = "ATGC"
rna = "UACG"

test = "GCGTAC"
test2 = test.translate(test.maketrans(dna,rna))

translation = test.maketrans(dna, rna)
print(test.translate(translation))
print(test.translate(test.maketrans(dna,rna)))
for k, v in translation.items():
    print(k, v)
print(test2)
# def dna_to_rna(dna):