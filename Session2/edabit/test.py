# def longestEvenWord(sentence):
#     sentence = sentence.split()
#     slen = [len(s) for s in sentence]
#     if len([x for x in slen if x%2 == 0]) == 0:
#         return '00'
    
#     ml = max(slen)
#     if ml%2 != 0:
#         for i in range(slen.count(ml)):
#             slen[slen.index(ml)] = -1
            
#     return sentence[slen.index(max(slen))]

# for t in range(int(input())):
#     print(longestEvenWord(input()))

# test = "It is a pleasant day today"
# test = "Time to write great code"

# def longestEvenWord(sentence):
#     sentence = sentence.split()
#     slen = [len(s) for s in sentence]
#     print(slen)

#     maxnum = max(slen)
#     if maxnum % 2 
#     print(maxnum)
#     for k, v in enumerate(slen):
#         if v == maxnum and v % 2 == 0:
#             return sentence[k]
    
   

# print(sentence[3])
# print(longestEvenWord(test))
# print(test)
import math
import numpy as np

test = [4,5,18,1]

def getMax(arr, k):
    lst = []
    score = 0
    num = 1
    while num <= k:
        for aidx, a in enumerate(arr):
            maxnum = max(arr)
            print(maxnum)
            # maxidx = [index for index, item in enumerate(arr) if item == maxnum]
            maxidx = np.argmax(arr)
            print(maxidx)
            score += maxnum
            arr[aidx] = math.ceil(a/3)
            lst.append(math.ceil(num/3))
        print(lst)
        return score

print(getMax(test, 3))