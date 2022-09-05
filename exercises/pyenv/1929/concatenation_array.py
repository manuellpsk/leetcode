from typing import List


class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return [*nums, *nums]


print(Solution().getConcatenation([1, 2, 1]))
