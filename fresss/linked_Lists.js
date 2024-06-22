class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  addLast(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
    this.size++;
  }
  deleteFirst() {
    if (this.head == null) return `empty list`;
    this.head = this.head.next;
    this.size--;
  }
  deleteLast() {
    if (this.head == null) return `list is empty`;
    if (this.head.next == null) {
      this.head = newNode;
      return;
    }
    let secondLast = this.head;
    let lastNode = this.head.next;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
      secondLast = secondLast.next;
    }
    secondLast.next = null;
    this.size--;
  }
  print() {
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.data, "->");
      currNode = currNode.next;
    }
    console.log("null");
  }
  getSize() {
    return ++this.size;
  }
  isEmpty() {
    return this.size == 0;
  }
}
let ll = new SLL();
// ll.addFirst(1);
// ll.addFirst(2);
// ll.addFirst(4);
// ll.addFirst(8);
// ll.print()
// console.log(ll.getSize())
// console.log(ll.isEmpty())

// ll.deleteFirst();
// ll.print();

ll.addLast(1);
ll.addLast(2);
ll.addLast(4);
ll.addLast(8);
ll.print();
ll.deleteLast();
ll.print();
console.log(ll.getSize());
console.log(ll.isEmpty());
