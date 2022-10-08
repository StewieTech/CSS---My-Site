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


def count_ones(num):
	return bin(num).count('1')

		