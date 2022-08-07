def reverseBits(n: int) -> int:
    # chars_b = bin(n).lstrip('-').lstrip('0b').zfill(32)
    chars_b = '{0:032b}'.format(n)
    print(chars_b)
    return int(chars_b[::-1], base=2)


print(reverseBits(43261596))
print(reverseBits(4294967293))
