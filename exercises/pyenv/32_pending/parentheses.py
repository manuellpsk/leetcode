class Solution:
    def longestValidParentheses(self, s: str) -> int:
        co = 0
        count_gobal = 0
        count_partial = 0
        for c in s:
            if c == '(':
                co += 1
            elif c == ')':
                if co > 0:
                    co -= 1
                    count_partial += 1
                if co == 0:
                    count_gobal += count_partial
                    count_partial = 0
                else:
                    count_gobal = max(count_gobal, count_partial)

        return count_gobal * 2
