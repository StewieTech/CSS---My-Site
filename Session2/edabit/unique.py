lst = [3, 3, 3, 7, 3, 3]

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



slst = sorted(lst)
# print(slst)

def unique(l):
    newlist = sorted(l)[0] if sorted(l)[0] != sorted(l)[1] else "Nothing"       
    # return sorted(l)[0] if sorted(l)[0] != sorted(l)[1] else sorted(l)[-1]
    return newlist

print(unique(lst))