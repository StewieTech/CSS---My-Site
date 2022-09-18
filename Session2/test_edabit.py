import unittest
import edabit

class edabit(unittest.TestCase):

    def test_main(self):
        n1 = ones_threes_nines(0)
        Test.assert_equals(n1.ones, 0)
        n2 = ones_threes_nines(1)
        Test.assert_equals(n2.threes, 0)