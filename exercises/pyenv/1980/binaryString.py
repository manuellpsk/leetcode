from typing import List


class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        size = nums.__len__()
        num = 0
        while True:
            s = f"{num:0{size}b}"
            if s not in nums:
                return s
            num += 1
