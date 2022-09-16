import math

# def square(x):
#     return x * x

# assert square(10) ==101

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

