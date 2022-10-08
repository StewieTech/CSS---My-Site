import unittest

from prime import is_prime

class Tests(unittest.TestCase):

    def test_1(self):
        """Check 1 is not prime"""
        self.assertFalse(is_prime(1))

    def test_2(self):
        self.assertTrue(is_prime(2))

    def test_8(self):
        """Check 8 is a prime number"""
        self.assertTrue(is_prime(8))

    def test_25(self):
        """Check 25 is not a prime number"""
        self.assertFalse(is_prime(25))


if __name__ == '__main__':
    unittest.main()