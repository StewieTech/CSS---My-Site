import unittest
import initials

a1 = Name("john", "SMITH")

class initials(unittest.TestCase):

    Test.assert_equals(a1.fname, "John")
    Test.assert_equals(a1.lname, "Smith")
    Test.assert_equals(a1.fullname, "John Smith")
    Test.assert_equals(a1.initials, "J.S")