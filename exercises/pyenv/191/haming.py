class Solution:
    def hammingWeight(self, n: int) -> int:
        w = str(int(n, 2)).strip('0')
        i = 0
        for c in w:
            if c == '1':
                i += 1
        return i
