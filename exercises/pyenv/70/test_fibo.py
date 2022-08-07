import pytest
from fibo import *


@pytest.mark.parametrize("number, expected", [
    (2, 2),
    (3, 3),
])
def test(number, expected):
    sol = Solution()
    assert sol.climbStairs(number) == expected
