import unittest

from countD import count_d 

class TestCase(unittest.TestCase):

    def test_1_20(self):
        """count fail for d"""
        # self.assertEqual(eda_bit(1,20), [1,2,'Eda',4,'Bit','Eda',7,8,'Eda','Bit',11,'Eda',13,14,'EdaBit',16,17,'Eda',19,'Bit'])
        self.assertEqual(count_d("My friend Dylan got distracted at school"),4)

if __name__ == '__main__':
    unittest.main()