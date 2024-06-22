function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }

  // O(n) time & O(n) space
function reverse(head) {
    if (!head || !head.next) {
      return head;
    }
    let tmp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
  }

  let value=LinkedListNode(value)
  value.reverse([1,2,3,4])
