import pytest
from binaryString import *


@pytest.mark.parametrize("nums, expected", [
    (["01", "10"], "00"),
    (["00", "01"], "11"),
])
def test(nums, expected):
    sol = Solution()
    assert sol.findDifferentBinaryString(nums) == expected
