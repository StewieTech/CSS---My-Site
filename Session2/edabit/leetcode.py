test = [3,3] # 6
test2 = [2,7,11,15] # 9
test3 = [3,2,4] # 6


def twoSum(nums, target):
    if len(nums) == 2 and nums[0] + nums[-1]  == target:
        return [0,1]
    else:
        for i in nums:
            for j in nums:
                if nums.index(i) != nums.index(j):
                    if i + j == target:
                        return nums.index(i) , nums.index(j)

# def twoSum(nums, target):
#     L = 0
#     R = len(nums) - 1
#     nums.index(L)
#     nums.index(R)

print(twoSum(test3,6))
                