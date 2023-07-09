
# test = [1,0,1,0]
# test2 = ['javascript', 'python', 'ruby', 'c']
# test3 =  ['John', 'Taylor', 'John']
# test4 = ['John', 'Taylor', 'John', 'john']

# # def remove_dups(lst):
# #     myset = set(lst)
# #     mylist = list(myset)
# #     return mylist
# #     # print(lst)
# mydict = {}

# def remove_dups(lst):
#     for i, item in enumerate(lst):
#         if item not in mydict:
#             mydict[item] = lst[i]
#     mylst = list(mydict)
#     return mylst
#     # print(mylst)
            
#     # myset = set(lst)
#     # mylist = list(myset)
#     # return mylist
#     # # print(lst)

# print(remove_dups(test4))    

# def remove_dups(lst):
#   return [x for n,x in enumerate(lst) if x not in lst[:n]]

# def remove_dups(lst):
#   return sorted(set(lst),key=lst.index)

# test = "the quick brown fox jumps then quickly blows air"
test2 = "the misty examination pleases into the drab county"
test3 = "indivisibility"

# def first_non_repeated_character(txt):
#     lst = sorted(set(txt),key=txt.index)
#     # for i in lst:
#     #     count[i]
#     return lst
   
#     #  mylist = []
#     # for i, item in enumerate(txt):
#     #     if item not in txt:
#     #         mylist.append(item)
#     #     else:
#     #         return mylist

# print(first_non_repeated_character(test2))

# def first_non_repeated_character(txt):
#   for c in txt:
#     if txt.count(c) == 1:
#       return c
#   return False

def duplicate_count(txt):
    count = 0
    # myset = sorted(set(txt))
    mylst = []
    for i in txt:
        if txt.count(i) > 1:
            mylst.append(i)
    myset = set(mylst)
    return len(myset)

print(duplicate_count(test3))

def duplicate_count(txt):
  return sum([1 for x in set(txt) if txt.count(x) > 1])

def duplicate_count(txt):
count = {}
for char in txt: 
count[char] = count.get(char, 0) + 1
return len([char for char, num in count.items() if num > 1])