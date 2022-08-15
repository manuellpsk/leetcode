from functools import reduce
import re


class Solution:

    def sumNeighbor(self, s):
        return reduce(lambda x, y: int(x) + int(y), filter(lambda x: x.isdigit(), s.split(',')), 0)

    def replace(self, matcher: list, s):
        for obj in matcher:
            subs_match = obj.group().__str__()
            if subs_match == '()':
                s = s.replace(subs_match, '%s,' % 1)
            else:
                new_c = 1 + \
                    self.sumNeighbor(subs_match[1:subs_match.__len__()-1])
                s = s.replace(subs_match, '%s,' % new_c)
        return s

    def refinamaiento(self, s: str):
        matcher = re.finditer(r'(\d+,){2,}', s)
        for obj in matcher:
            start = obj.span()[0]
            end = obj.span()[1]
            subs_match = obj.group().__str__()
            new_c = self.sumNeighbor(subs_match)
            s = s[:start] + \
                s[start:end].replace(subs_match, '%s,' % new_c) + s[end:]
        return s

    def longestValidParentheses(self, s: str) -> int:
        s = s.lstrip(')')
        if not s:
            return 0
        while True:
            matcher = re.finditer(r'\((\d*,)*\)', s)
            new_s = self.refinamaiento(self.replace(matcher, s))
            if new_s == s:
                break
            else:
                s = new_s
        cantidades = [int(e.group().rstrip(','))
                      for e in re.finditer(r'(\d+,)+', s)]
        return 0 if not cantidades else int(max(cantidades)) * 2


print(Solution().longestValidParentheses('(()'))
