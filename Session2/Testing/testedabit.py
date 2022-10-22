# import unittest

# from edabit import count_ones

# class TestCase(unittest.TestCase):

#     def test_1(self):
#         self.assertEqual(count_ones(12),2)

# if __name__ == '__main__':
#     unittest.main()

# import unittest

# from reverse import fib

# class TestCase(unittest.TestCase):

#     def test_2(self):
#         """We failed baby"""
#         self.assertEqual(fib(2), 1)

# if __name__ == '__main__':
#     unittest.main()

import unittest

from reverse import eda_bit

class TestCase(unittest.TestCase):

    def test_1_20(self):
        """0ne through 20 failed"""
        self.assertEqual(eda_bit(1,20), [1,2,'Eda',4,'Bit','Eda',7,8,'Eda','Bit',11,'Eda',13,14,'EdaBit',16,17,'Eda',19,'Bit'])

if __name__ == '__main__':
    unittest.main()