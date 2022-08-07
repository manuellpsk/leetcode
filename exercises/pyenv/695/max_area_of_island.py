from re import X


class Solution:
    def maxAreaOfIsland(self, grid: list[list[int]]) -> int:
        islands = []
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    options = [(i-1, j), (i, j+1), (i+1, j), (i, j-1)]
                    posibles_island = []
                    for option in options:
                        for index, island in enumerate(islands):
                            if option in island and index not in posibles_island:
                                posibles_island.append(index)
                    if posibles_island:
                        posibles_island.sort()
                        first_save = posibles_island.pop(0)
                        new_island = [(i, j)]
                        while posibles_island:
                            new_island += islands.pop(posibles_island.pop())
                        islands[first_save] += new_island
                    else:
                        islands.append([(i, j)])
        # for isl in islands:
        #     print(isl)
        # print(max(list(map(lambda x: len(x), islands))) or 0)
        return max(list(map(lambda x: len(x), islands)), default=0)


Solution().maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [
    0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]])
