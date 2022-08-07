function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function createListNode(arr) {
  const root = new ListNode(arr[0]);
  let node = root;
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return root;
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
export var reverseBetween = function (head, left, right) {
  head = createListNode(head);
  console.log(head);
  if (left === right) return head;
  const rootHead = head;
  let auxRoot = rootHead;
  let beforeHead = null;
  const rootNewList = new ListNode(null);
  let auxNewList = rootNewList;
  let i = 1;
  while (i <= right) {
    console.log({ i }, { head });
    if (i >= left) {
      if (rootNewList.val == null) {
        rootNewList.val = head.val;
      } else {
        auxNewList.next = head.val != null ? new ListNode(head.val) : null;
        auxNewList = auxNewList.next;
      }
    } else {
      beforeHead = head;
    }
    head = head.next;
    i++;
  }
  if (beforeHead) {
    beforeHead.next = reverse(rootNewList);
    while (auxRoot.next) {
      auxRoot = auxRoot.next;
    }
    auxRoot.next = head;
    return rootHead;
  }
  const dRoot = reverse(rootNewList);
  let auxDR = dRoot;
  while (auxDR.next) {
    auxDR = auxDR.next;
  }
  auxDR.next = head;
  return dRoot;
};

function reverse(head) {
  console.log("input", head);
  let newList = null;
  while (head) {
    let aux = newList;
    newList = new ListNode(head.val);
    newList.next = aux;
    head = head.next;
  }
  console.log("output", newList);
  return newList;
}
