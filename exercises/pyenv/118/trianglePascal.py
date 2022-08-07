from math import ceil
from typing import List


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        i: int = 1
        resultado: List[List[int]] = [[1]]
        while i < numRows:
            resultado.append([])
            len_new_array = i+1
            half = ceil((len_new_array) / 2)
            j = 0
            while j < half:
                add = 0 if j-1 < 0 else resultado[i-1][j-1]
                resultado[i].append(resultado[i-1][j]+add)
                j += 1
            until = j-(len_new_array % 2 + 1)
            while until >= 0:
                resultado[i].append(resultado[i][until])
                until -= 1
            # resultado.append(new_array)
            i += 1

        return resultado


print(Solution().generate(3))
