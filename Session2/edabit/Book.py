# class Book:

# 	def __init__(self, title, author ):
# 		self.title = title
# 		self.author = author

# 	def get_title(self):
# 		return "Title: " + self.title

# 	def get_author(self):
# 		return "Author: " + self.author

# PP = Book('Pride and Prejudice', 'Jane Austen')
# H = Book('Hamlet','William Shakespeare')
# WP = Book('War and Peace','Leo Tolstoy')

# print

# like_list = ["Cheese"]
# class Person:

#     def __init__(self, name, food = [like_list], badfood = ["pizza"]):

#         self.name = name
#         self.food = food
#         self.badfood = badfood
        
#     def taste(self, eat):
#         if eat in self.food:
#             return f"{self.name} eats the {self.food} and loves it!"
#         elif eat in self.badfood:
#             return f"{self.name} eats the {self.food} and hates it!"
#         else:
#             return f"{self.name} eats the {self.food}!"
			

# n1 = Person("Errol","Cheese","pizza")
# # print(n1.name)

# n1.taste("Cheese")
# n1.taste("pizza")
	
# class Person:

#     def __init__ (self,name,likes,hates):
#         self.name = name
#         self.likes = likes
#         self.hates = hates
        
#     def taste(self,food):
#         if food in self.likes: add = " and loves it"
#         elif food in self.hates: add = " and hates it"
#         else: add=""
#         return self.name + " eats the " + food + add + "!"

# def paths(n):
# 	if n == 1:
# 		return 1
# 	return n * paths(n-1)
	
# print(paths(4))

# a = 100
# b = 200


# def swap(a, b):
# 	temp = 0
# 	temp = b
# 	b = a
# 	a = temp
# 	return [a, b]

# print(swap(a, b))

# lst = [1, 2, 3, 4, 5]
# temp = []
# def invert_list(lst):
# 	for i in lst:
# 		lst = -1 * lst[i]
# 		return lst

# print(invert_list(lst))
# string = "mubashir1"
# chars = list(string)


# def remove_numbers(string):
#     return ("").join(i for i in string if i.isalpha())

# print(remove_numbers(string))
# txt1= 'a'
# txt2 = 'edabit'


# def char_count(txt1, txt2):
# 	counter = 0
# 	for i in txt2:
# 		if i == txt1:
# 			counter = counter + 1
# 	return counter

# # def char_count(txt1, txt2):
# # 	return txt2.count(txt1)

# print(char_count(txt1, txt2))

# txt = "mubashir"
# def even_odd_string(txt):
# 	evenlst, oddlst = '',''
# 	for i in range(len(txt)):
# 		if i % 2 == 0:
# 			evenlst = evenlst + txt[i]
# 		else:
# 			oddlst = oddlst + txt[i]
# 	return evenlst


# print(even_odd_string(txt))

# test = "Errol"

# # def mumbling(s):
# # 	for k,v in s:
# # 		# Two = int() * (k - 1)
# # 		return k , v

# def mumbling(s):
# 	return ''.join(c.upper() + c.lower() * i for i, c in enumerate(s))


# # def mumbling(s):
# #     res = ""
# #     for i in range(len(s)):
# #         res += s[i].upper() + s[i].lower() * i + "-"
# #     return res[:-1]

# # print(mumbling(test))

# def fizz_buzz(num):
# 	int = 1
# 	final = []
# 	for i in range(1, num + 1):
# 		if i % 15 == 0:
# 			final.append("FizzBuzz")
# 		elif i % 3 == 0: 
# 			final.append("Fizz")
# 		elif i % 5 == 0: 
# 			final.append("Buzz")
# 		else:
# 			final.append(str(i))

# 	return final

# def fizz_buzz(num):
# 		if num % 15 == 0:
# 			return str("FizzBuzz")
# 		if num % 3 == 0: 
# 			return "Fizz"
# 		if num % 5 == 0: 
# 			return "Buzz"
# 		else:
# 			return str(num)

# print(fizz_buzz(98))

# def fizz_buzz(num):
# 	return "Fizz"*(num%3==0) + "Buzz"*(num%5==0) or str(num)

# lst = [3, 5, 4, 2] # 3
# lst = [50, 20, 80, 90, 100, 60, 30, 50, 80, 60] # 0
# lst = [35, 23, 40, 21, 38] # -1

# def find_a_seat(n, lst):
# 	ntarget = (n / len(lst)) * 0.5
# 	print(ntarget)
# 	for k,v in enumerate(lst):
# 		if v <= ntarget:
# 			return k
# 	return -1

# print(find_a_seat(200, lst))


# def find_a_1964

scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
          "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
          "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,
          "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

test = "BBBB"



# def name_score(name):
# 	new_list = []
# 	count = 0
# 	# for k,v in enumerate(scores):
# 	for k,v in scores.items():
# 		print(k)
# 		for letter in name:
# 			print(letter)
# 			if letter == k:
# 				# count += scores[v]
# 				new_list.append(v)
# 		count = sum(new_list)
# 		print(new_list)
# 		if count <= 60: return "NOT TOO GOOD"
# 		elif 61 <= count <= 300: return "PRETTY GOOD"
# 		elif 301 <= count <= 599: return "VERY GOOD"

# # 		else: return "THE BEST"
# def name_score(name):	
# 	count = sum(scores[i] for i in name)


# 	if count <= 60: return "NOT TOO GOOD"
# 	elif 61 <= count <= 300: return "PRETTY GOOD"
# 	elif 301 <= count <= 599: return "VERY GOOD"

# 	else: return "THE BEST"


# print(name_score(test))
# from itertools import count

# def doubleton(n):
# 	return next(n for n in count(n) if len(set(str(n))) == 2)

# print(doubleton(12))

# def doubleton(n):
# 	n+=1
# 	while len(set(str(n)))!=2:
# 		n+=1
# 	return n

# def is_same_num(num1, num2):
# 	if num1 == num2: 
# 		True
# 	else: 
# 		False

# def print_list(n):
# 	lst = []
# 	for num in range(1, n+1):
# 		lst.append(num)
# 	return lst

# print(print_list(6))

# def nothing_is_nothing(*args):
# 	list = [args]
# 	answer = all(list)
# 	if answer == True:
# 		return answer
# 	return False

# print(nothing_is_nothing(33, 'Hello'))

# lst = [0, 4, 19, 34, 50, -9, 2]

# def last_ind(lst):
# 	for item in lst:
# 		return lst[-1]

# print(last_ind(lst))

# def last_ind(lst):
# 	return lst[-1] if lst else None

# def fifty_thirty_twenty(ati):
# 	dict = {}
# 	dict["Needs"] = ati * 0.5 
# 	dict["Wants"] = ati * 0.3
# 	dict["Savings"] = ati * 0.2
# 	return dict

# print(fifty_thirty_twenty(10000))

# def fifty_thirty_twenty(ati):
# 	return {
# 		'Needs'  : 0.5 * ati,
# 		'Wants'  : 0.3 * ati,
# 		'Savings': 0.2 * ati,
# 	}

# def fifty_thirty_twenty(ati):
#     a = [(ati * 1/2), (ati * 3/10), (ati * 1/5)]
#     b = ["Needs", "Wants", "Savings"]
#     return dict(zip(b, a))

# pl = ["Annie", "Steven", "Lisa", "Osman"]
# jl = ["Teacher", "Engineer", "Doctor", "Cashier"]

# def assign_person_to_job(names, jobs):
# 	return dict(zip(names, jobs))

# print(assign_person_to_job(pl,jl))

# def assign_person_to_job(pl, jl):
# 	return {p:j for p,j in zip(pl,jl)}

# 	def assign_person_to_job(pl, jl):
# 	a={}
# 	for i in range (len(pl)):
# 		a.update({pl[i]:jl[i]})
# 	return a

# lst = [3, 4, 9]

# def even_odd_transform(lst, n):
# 	newlst = []
# 	count = 1
# 	while count <= n:
# 		count += 1
# 		# print(count)
# 		# print(n)
# 		for item in lst:
			
# 			print(item)
			
# 			if item % 2 == 0:
# 				lst[0] = lst[0] -  2
# 				lst[1] -=  lst[1] -  2
# 				lst[2] -=  lst[2] -  2
# 			else: 
# 				lst[0] +=  2
# 				lst[1] +=  2
# 				lst[2] +=  2
				

# 				# newlst.append(item + 2)
# 	return lst

# print(even_odd_transform(lst, 3))

# def even_odd_transform(lst, n):
#   return [i+(n*2) if i%2 else i-(n*2) for i in lst]

#   def even_odd_transform(lst, n):
# 	c=[]
# 	for i in lst:
# 		if i%2==0:
# 			c.append(i-2*n)
# 		else:
# 			c.append(i+2*n)
# 	return c

# b = 2
# c = 5
# a = 0

# a = b + c
# c = a - b
# c = c+ a
# c = b + c
# b = a + c
# print(a,b,c)


# x = 2
# x = x + 5
# result = x * 3
# result = result - 6
# result = result / 4
# result = result + x

# print(result)

# def leap_year(year):
# 	if year % 100 == 0 and year % 400 != 0:
# 		return False
# 	elif year % 4 == 0:
# 		return True
# 	else:
# 		return False

# print(leap_year(2000))

test = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"
# test1 = test.split()
# test12 = 
# test2 = sorted(test12)
# print(test2)

def high_low(txt):
	
	# next = sorted(list(txt.replace(" ", "")))
	next2 = txt.split()
	next1 = list(map(lambda x: int(x), next2 ))
	next = sorted(next1)

	# return "".join(next[0] + next[-1])
	return  str(next[-1])  + " " + str(next[0])

print(high_low(test))

# def high_low(txt):
#   a=list(map(int, txt.split()))
#   return "{} {}".format(max(a), min(a))
