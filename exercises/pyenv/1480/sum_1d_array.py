from typing import List


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        total = 0

        def sumar(n):
            nonlocal total
            total += n
            return total
        return list(map(sumar, nums))


print(Solution().runningSum([1, 2, 3]))
