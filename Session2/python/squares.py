import sys
# from name import square

# for i in range(10):
#     print(f"The square is {i} is {square(i)}")

# class Point():
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

# p = Point(2, 8)
# print(p.x, p.y, "These are the goods")

# class Flight():
#     def __init__(self, capacity):
#         self.capacity  = capacity
#         self.passengers = []
    
#     def add_passenger(self, name):
#         if not self.open_seats():
#             return False
#         self.passengers.append(name)
#         return True

#     def open_seats(self):
#         return self.capacity - len(self.passengers)

# flight = Flight(3)

# people = ["Harry","herminy", "Ron", "Ginny"]
# for person in people:
#     success = flight.add_passenger(person)
#     if success:
#         print(f"added passenger succesfully")
#     else:
#         print(f"No seats for them")


# decoraters

# def announce(f):
#     def wrapper():
#         print("About to run the function...")
#         f()
#         print("Done with the function.")
#     return wrapper

# @announce
# def hello():
#     print("Hello, world!")

# hello()

# people = [
# {"Zarry": "Zriff", "Herminy": "Ginny",
# "Ron": "Griff"}
# ]

# people.sort(key=lambda person: person["name"])
# print(people)

from tkinter import Y


x = int(input("x: "))
y = int(input("y: "))

try:
    result = x / y
except ZeroDivisionError:
    print("Error is handled correctly")
    sys.exit(1)

print(result)