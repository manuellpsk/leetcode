from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        values = dict()
        for e in nums:
            if values.get(e):
                return True
            values[e] = True
        return False
