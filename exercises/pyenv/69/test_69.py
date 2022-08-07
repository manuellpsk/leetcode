import pytest
from square import *


@pytest.mark.parametrize("number, expected", [
    (4, 2),
    (8, 2),
])
def test(number, expected):
    assert my_square(number) == expected
