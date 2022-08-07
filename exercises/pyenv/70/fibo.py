class Solution:
    def climbStairs(self, n: int) -> int:
        first = 0
        second = 1
        while n > 0:
            aux = second
            second = first + second
            first = aux
            n -= 1
        return second
