from functools import reduce
from re import T


def isHappy(n: int) -> bool:
    norepeat = []
    while n != 1:
        if n in norepeat:
            return False
        norepeat.append(n)
        total = 0
        for char in str(n):
            total += int(char)**2
        n = total
    return True


print(isHappy(1111111))
