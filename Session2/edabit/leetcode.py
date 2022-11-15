# test = [3,3] # 6
# test2 = [2,7,11,15] # 9
# test3 = [3,2,4] # 6


# def twoSum(nums, target):
#         for i in nums:
#             for j in nums[1:]:
#                 # if nums.index(i) != nums.index(j):
#                 if i + j == target:
#                     return nums.index(i) , nums.index(j)

# def twoSum(nums, target):
#     L = 0
#     R = len(nums) - 1
#     nums.index(L)
#     nums.index(R)


# def twoSum(nums, target):
#     prevMap = {}
#     for i, n in enumerate(nums):
#         Diff = target - n
#         # print(Diff)
#         if Diff in prevMap:
#             return [prevMap[Diff], i]
#         prevMap[n] = i
#     return prevMap







# print(twoSum(test2,9))

# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
        
#         for i, val1 in enumerate(nums):
            
#             for j, val2 in enumerate(nums):
                
#                 if (val1+val2) == target and i!=j:
#                     return [i, j]
                

    # Class Solution:
    # def twoSum(self, nums: List[int], target: int) -> List[int]:
    #     num_dic = {}
        
    #     for idx, num in enumerate(nums):
    #         bal = target-num
            
    #         if bal in num_dic:
    #             return [num_dic[bal], idx] 
    #         num_dic[num] = idx




# class Solution:
#     def maxProfit(self, prices: list[int]) -> int:
#         prevMap = {}
#         minNum = 0
#         maxNum = 0
#         for i, val1 in enumerate(prices):
#             for j, val2 in enumerate(prices):
#                 if val1 < val2 and prices.index(i) < prices.index(j): 
#                     minNum = val1
#                 elif val1 > val2 and prices.index(j) > prices.index(i): 
#                     maxNum = val1
#                 return maxNum - minNum
            

# print(Solution().maxProfit(prices))

test = [7,1,5,3,6,4]
test2 = [7,6,4,3,1]

# def maxProfit(prices):
#     prevMap = {}
#     minNum = 0
#     maxNum = 0
#     for i, val1 in enumerate(prices):
#         for j, val2 in enumerate(prices):
#             if val1 < val2: # and prices.index(i) < prices.index(j): 
#                 minNum = val1
#             if val1 > val2 and prices.index(j) > prices.index(i): 
#                 maxNum = val1
#                 print(maxNum)
                
#     return maxNum - minNum

# print(maxProfit(test))


# def maxProfit(prices):
#     maxNum = 0
#     for i, val1 in enumerate(prices):
#         for j, val2 in enumerate(prices):
#             if j > i:
#                 Diff = val2 - val1
#                 maxNum = max(maxNum, Diff)
#     return maxNum

# def maxProfit(prices):
#     prevMap = {}
#     maxNum = 0
#     for i, val1 in enumerate(prices):
#             prices[i] = val1
#                 Diff = val2 - val1
#                 maxNum = max(maxNum, Diff)
#     return maxNum

# def maxProfit(prices):
#     l, r = 0, len(nums) - 1
#     maxNum = 0
#     for i, val1 in enumerate(prices):
#         m = (l + r) // 2
#         if prices[m] 



#         left, right = 0, 1
#         maxProfit = 0
#         while right < len(prices):
#             if prices[left] < prices[right]:
#                 Diff = prices[right] - prices[left]
#                 maxProfit = max(Diff, maxProfit)
#             else:
#                 left = right
#         right += 1  
#         return maxNum

    
# print(maxProfit(test1))

# class Solution:
#     def maxProfit(self, prices: List[int]) -> int:
#         left, right = 0, 1
#         maxProfit = 0
#         while right < len(prices):
#             Diff = prices[right] - prices[left]
#             if prices[left] < prices[right]:  
#                 maxProfit = max(Diff, maxProfit)
#             else:
#                 left = right
#             right += 1  
#         return maxProfit

def getSum(a, b):
    lst = []
    if a > 0 and b > 0 or a < 0 and b < 0:
        for i in range(abs(a)):
            lst.append(1)
        for i in range(abs(b)):
            lst.append(1)
    return [len(lst) if a > 0 else len(lst) * -1]
    elif a > 0 and b < 0:
        for i in range(abs(a)):
            print(lst)
            lst.append(1)
        for i in range(abs(b)):
            lst[-1].pop(-1)
    # elif a < 0 and b < 0:
    return len(lst)

# or 
print(getSum(4,-2))
# print(-2 < 0)