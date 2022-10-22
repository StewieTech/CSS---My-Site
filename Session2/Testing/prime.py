# from testing import is_prime

# # assert is_prime(5)

# def test_prime(n , expected):
#     if is_prime(n) != expected:
#         print(f"ERROR on is_prime({n}), {expected})")

# test_prime(25, False)


# here
# import math

# def is_prime(n):
#     if n < 2:
#         return False
#     for i in range(2, int(math.sqrt(n))):
#         if n % i == 0:
#             return False
#     return True 

def eda_bit(start, end):
    lst = []
    for x in range(start, end +1):
        if x % 15 == 0:
            lst.append("EdaBit")
        elif x % 5 == 0:
            lst.append("bit")
        elif x % 3 == 0:
            lst.append("eda")
            print(lst)
        else:
            lst.append(x)
    return lst

print(eda_bit(1,15))
	