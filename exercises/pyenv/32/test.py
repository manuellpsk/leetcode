import pytest
from improve import *


@pytest.mark.parametrize("string, expected", [
    ("(()", 2),
    (")()())", 4),
    ("", 0),
    ("()(())", 6),
    ("()(()", 2),
    ("()(()()", 4),
    ("()(()())", 8),
])
def test(string, expected):
    assert Solution().longestValidParentheses(string) == expected
