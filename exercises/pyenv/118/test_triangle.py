import pytest
from trianglePascal import *


@pytest.mark.parametrize("numRows, expected", [
    (5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]),
    (1, [[1]]),
])
def test(numRows, expected):
    sol = Solution()
    assert sol.generate(numRows) == expected
