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

# 		else: return "THE BEST"
def name_score(name):	
	count = sum(scores[i] for i in name)


	if count <= 60: return "NOT TOO GOOD"
	elif 61 <= count <= 300: return "PRETTY GOOD"
	elif 301 <= count <= 599: return "VERY GOOD"

	else: return "THE BEST"


print(name_score(test))