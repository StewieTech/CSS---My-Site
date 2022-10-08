# from testing import is_prime

# # assert is_prime(5)

# def test_prime(n , expected):
#     if is_prime(n) != expected:
#         print(f"ERROR on is_prime({n}), {expected})")

# test_prime(25, False)

import math

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n))):
        if n % i == 0:
            return False
    return True 