# def count_ones(num):
#  count = 0
#  check = bin(num)
#  lst = []
#  for one in range(len(check)):
#    if one == 1:
#     count += 1
#     lst.append(one)
#    return count + 1

# binary = bin(12)
# print(count_ones(12))
# print(binary)
# print(lst)


# def count_ones(num):
# 	return bin(num).count('1')

# def mean(num):
# 	numList = map(int, str(num))
# 	print(numList)
# 	numSum = sum(numList)
# 	numLength = len(numList)
# 	print(numLength)
# 	return  num

# mean(532)
	
import math

def cars_needed(n):
	cars = n /5
	carsRound = math.floor(cars)
	return carsRound

print(cars_needed(11))
		