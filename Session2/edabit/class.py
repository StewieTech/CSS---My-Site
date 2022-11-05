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

class programer:
    def __init__ (self, sallary, work_hours):
        self.sallary = sallary
        self.work_hours = work_hours
        
    def __del__ (self):
        msg = 'oof, ' + str(self.sallary) + ', ' + str(self.work_hours)  
        del self
        return msg
        
    def compare (self, other):
        if self.sallary < other.sallary:
            return self
        else:
            return other

jack = programer(10000, 8)
john = programer(50000, 5)
bad = jack.compare(john)
dead = bad.__del__()

# print(john.sallary)
# print(dead)
print(programer.compare(john, jack))
# john.other
