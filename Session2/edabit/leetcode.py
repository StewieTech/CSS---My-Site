test = [3,3] # 6
test2 = [2,7,11,15] # 9
test3 = [3,2,4] # 6


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


prices = [7,1,5,3,6,4]

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        prevMap = {}
        minNum = 0
        maxNum = 0
        for i, val1 in enumerate(prices):
            for j, val2 in enumerate(prices):
                if val1 < val2 and prices.index(i) < prices.index(j) : minNum = val1
                if val1 > val2: maxNum = val1 and prices.index(j) > prices.index(i) : maxNum = val1
                return maxNum - minNum
            

print(prices.maxProfit())