import unittest
# import initials
from initials import count_d

# a1 = Name("john", "SMITH")

# class initials(unittest.TestCase):

#     Test.assert_equals(a1.fname, "John")
#     Test.assert_equals(a1.lname, "Smith")
#     Test.assert_equals(a1.fullname, "John Smith")
#     Test.assert_equals(a1.initials, "J.S")

# class initials(unittest.TestCase):
#     self.assertEqual(area_shape(2, 3, "triangle"), 3)
    
# if __name__ == "__main__":
#     unittest.main()


class initials(unittest.TestCase): 
    
    def_test1(self):
    """We failed!!"""
        self.assertEqual(count_d("My friend Dylan got distracted at school"),4)

if __name__ == "__main__":
    unittest.main()