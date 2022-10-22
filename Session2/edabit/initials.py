# class Name:

# 	def __init__ (self, fname, lname):
# 		self.fname = fname.capitalize()
# 		self.lname = lname.capitalize()
# 		self.fullname = fname.capitalize() + " " + lname.capitalize()
# 		self.initials = fname[0].capitalize() + "." + lname[0].capitalize()

# # n1 = Name("errol", "stewart")

# # print(n1.fname, n1.fullname, n1.initials)


def area_shape(base, height, shape):
	if shape == "triangle":
		return base * height * 0.5
	elif shape == "rectangle":
		return base * height
	return False 