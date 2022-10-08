# import unittest

# from edabit import count_ones

# class TestCase(unittest.TestCase):

#     def test_1(self):
#         self.assertEqual(count_ones(12),2)

# if __name__ == '__main__':
#     unittest.main()

import unittest

from reverse import fib

class TestCase(unittest.TestCase):

    def test_2(self):
        """We failed baby"""
        self.assertEqual(fib(2), 1)

if __name__ == '__main__':
    unittest.main()