class Solution:

    def verticalIntersecBoth(self, point_x: int):
        if self.rec1[0] <= point_x <= self.rec1[2] and self.rec2[0] <= point_x <= self.rec2[2]:
            return True
        return False

    def horizontalIntersecBoth(self, point_y: int):
        if self.rec1[1] <= point_y <= self.rec1[3] and self.rec2[1] <= point_y <= self.rec2[3]:
            return True
        return False

    def isRectangleOverlap(self, rec1: list[int], rec2: list[int]) -> bool:
        result = set()
        self.rec1 = rec1
        self.rec2 = rec2
        rectas_verticales = set([rec1[0], rec1[2], rec2[0], rec2[2]])
        rectas_horizontales = set([rec1[1], rec1[3], rec2[1], rec2[3]])
        for vertical in rectas_verticales:
            if self.verticalIntersecBoth(vertical):
                for horizontal in rectas_horizontales:
                    if self.horizontalIntersecBoth(horizontal):
                        result.add((vertical, horizontal))
        return len(result) == 4
