# lst = []
# txt = "hello"
# def reverse(txt):

#     for letter in range(len(txt)):
#        new =  lst.append(letter)
#     return print(new)

# # print(lst)
# print(reverse(txt))
# reverse(txt)
# print(txt[1:])

# count = 0
# def collatz(num):
# 	if num == 1:
# 		return count = 1
# 	while num > 1
# 	if num % 2 == 0:
# 		num = num / 2
# 		count += 1
# 	if num % 2 != 0:
# 		num * 3 + 1
# 		count += 1
# 	return collatz(num)

# def factorial(num):
#     targetNumber = 0
#     if num == targetNumber:
#         print("complete!!")

#     if num != targetNumber:
#         print(num)
#         factorial(num - 1)

# print(factorial(10))


# def factorial(num):


#     targetNumber = 0
#     if num == 1:
#      return 1

     
#     print(num)
#     return  num * factorial(num - 1)

# print(factorial(10))

# def fib(n):
#     count = 0
#     if n <= 1:
#         return n
    
#     else:
#         print(n)
#         return fib(n-2) + fib(n-1)

# fib(10)

def eda_bit(start, end):
    lst = []
    for x in range(start, end +1):
        if x % 15 == 0:
            lst.append("EdaBit")
        elif x % 5 == 0:
            lst.append("Bit")
        elif x % 3 == 0:
            lst.append("Eda")
            print(lst)
        else:
            lst.append(x)
    return lst
    

