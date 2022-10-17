from multiprocessing.connection import Listener
from typing import List, Optional

def createListNode(items_list: List):
    list_ = None
    head = None
    for item in items_list:
        if list_ is None:
            list_ = ListNode(item)
            head = list_
        else:
            list_.next = ListNode(item)
            list_ = list_.next
    return head

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __str__(self) -> str:
        values = []
        list_values = self
        while list_values:
            values.append(list_values.val.__str__())
            list_values = list_values.next
        return ", ".join(values)



class Solution:
    mergeList = None
    def prepopList(self, list_: ListNode):
        if not self.mergeList:
            self.mergeList = ListNode(list_.val)
            self.headList = self.mergeList
        else:
            self.mergeList.next = ListNode(val=list_.val)
            self.mergeList = self.mergeList.next
        return list_.next

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        while True:
            val1 = getattr(list1, 'val', None)
            val2 = getattr(list2, 'val', None)
            if val1 is None and val2 is None:
                break
            # print(f"Comparing: {list1} | {list2}")
            if val1 is None:
                list2 = self.prepopList(list2)
            elif val2 is None:
                list1 = self.prepopList(list1)
            elif list1.val <= list2.val:
                list1 = self.prepopList(list1)
            else:
                list2 = self.prepopList(list2)
        return self.headList



list1 = createListNode([-10,-9,-6,-4,1,9,9])
list2 = createListNode([-5,-3,0,7,8,8])
print(list1)
print(list2)
print(Solution().mergeTwoLists(list1, list2))