from re import I


def myPow(x: float, n: int) -> float:
    # get real base according with pow sign
    pow = abs(n)
    if pow == 0:
        return 1
    sign_pow = pow/n
    x = x if sign_pow == 1 else 1/x
    if pow == 1:
        return x
    total = 1
    while pow > 1:
        base = x
        pow_loop = 1
        while pow_loop*pow_loop <= pow:
            base *= base
            pow_loop *= 2
        total *= base
        pow -= pow_loop
    if pow == 1:
        total *= x
    return total


# print(myPow(2.00000, 10))
# print(myPow(2.10000, 3))  # 9.2610
# print(myPow(2.00000, -2))
# print(myPow(2.0000, -2))
# print(myPow(0.2, 130))
# print(myPow(0.85318, 20))
# print("{0:.16f}".format(myPow(-0.99999, 221620)))
# print("{0:.16f}".format(myPow(3, 1)))
# print("{0:.16f}".format(myPow(3, 30)))

