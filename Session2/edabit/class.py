# class programer:
#     def __init__ (self, salary, work_hours):
#         self.salary = salary
#         self.work_hours = work_hours
#     # def __del__ (self, salary, work_hours):
#     #     self.salary = salary
#     #     self.work_hours = work_hours
#     #     return "oof, " + str(salary) + ", " + str(work_hours)
# 	# def compare (self):
# 	# 	#code

# jack = programer(10000, 8)

# print(programer(10000, 5))

# A = 7
# B = 10
# A = B
# B = A

# print(B)

# class programer:
#     def __init__ (self, sallary, work_hours):
#         self.sallary = sallary
#         self.work_hours = work_hours
        
#     def __del__ (self):
#         msg = 'oof, ' + str(self.sallary) + ', ' + str(self.work_hours)  
#         del self
#         return msg
        
#     def compare (self, other):
#         if self.sallary < other.sallary:
#             return self
#         else:
#             return other

# jack = programer(10000, 8)
# john = programer(50000, 5)
# bad = jack.compare(john)
# dead = bad.__del__()

# # print(john.sallary)
# # print(dead)
# print(programer.compare(john, jack))
# john.other

# class Magic:
#     def replace(self, phrase, old, new):
#         for letter in phrase:
#             if letter == self.old:
#                 letter = self.new
#         return phrase

#     def str_length(self, string):
#         return len(string)

#     def trim(self, string)
#         return strip(string)

#     def list_slice(self, )

# magic = Magic()
# print(Magic.replace("AzErty-QwErty", 'E','e'))


# class Magic:
# 	def replace(self, text, c1, c2):
# 		return text.replace(c1, c2)
	
# 	def str_length(self, text):
# 		return len(text)
	
# 	def trim(self, text):
# 		return text.strip()
	
# 	def list_slice(self, element, index):
# 		x = element[index[0]-1:index[1]]
# 		if x == []:
# 			return -1
# 		else:
# 			return x

def print_list(n):
# result, i = [], 1
    result = []
    i = 1
    # while i <= n:
    for i in range(n+1):
        result += [i]
    result.remove(0)
    return result

print(print_list(5))