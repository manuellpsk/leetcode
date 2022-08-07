from hashlib import new
from math import floor, log


def my_square(n):
    b = 1
    while b != n/b:
        new_b = ((n/b)+b)*0.5
        if round(b, 10) == round(new_b, 10):
            break
        b = new_b
    return floor(b)


my_square(4)
