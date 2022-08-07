import pytest
from haming import *


@pytest.mark.parametrize("number, expected", [
    (b'00000000000000000000000000001011', 3),
    (b'00000000000000000000000010000000', 1),
    (b'11111111111111111111111111111101', 31),
])
def test(number, expected):
    sol = Solution()
    assert sol.hammingWeight(number) == expected
