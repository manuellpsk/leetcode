import pytest
from rectangle_overlap import *


@pytest.mark.parametrize("rec1, rec2, expected", [
    ([0, 0, 2, 2], [1, 1, 3, 3], True),
    ([0, 0, 1, 1], [1, 0, 2, 1], False),
    ([0, 0, 1, 1], [2, 2, 3, 3], False),
    ([7, 8, 13, 15], [10, 8, 12, 20], True),
])
def test(rec1, rec2, expected):
    sol = Solution()
    assert sol.isRectangleOverlap(rec1, rec2) == expected
