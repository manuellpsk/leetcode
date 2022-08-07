from typing import List


class Solution:
    def duplicatedElement(self, arr: List):
        row_str = ''
        for n in arr:
            if n != '.' and n in row_str:
                return True
            else:
                row_str += n

    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in board:
            if self.duplicatedElement(row):
                return False
        for i in range(9):
            vertical = []
            for j in range(9):
                vertical.append(board[j][i])
            if self.duplicatedElement(vertical):
                return False
        for k in range(9):
            diagonal = []
            diagonal.append(board[k][k])
            if self.duplicatedElement(diagonal):
                return False
        m = 8
        for l in range(9):
            diagonal = []
            diagonal.append(board[l][m])
            if self.duplicatedElement(diagonal):
                return False
            m -= 1
        mii = 2
        mjj = 2
        while mii < 9 and mjj < 9:
            box = []
            for ii in range(mii-2, mii+1):
                for jj in range(mjj-2, mjj+1):
                    box.append(board[ii][jj])
            if self.duplicatedElement(box):
                return False
            mii += 3
            if mii > 8:
                mjj += 3
                mii = 2
        return True
