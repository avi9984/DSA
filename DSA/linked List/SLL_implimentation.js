
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class SLL{
    constructor() {
        this.head=null
    }
    // add first element in linked list
    addFirst(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
    }
    //add last elemenet in linked list
    addLast(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            return;
        }
        let currNode=this.head;
        while(currNode.next !==null){
            currNode=currNode.next;
        }
        currNode.next=newNode;
    }

    // delete first node in linked list
    deleteFirst(){
        if(this.head==null){
            return;
        }
        this.head=this.head.next;
    }

    // delete last node in linked list
    deleteLast(){
        if(this.head==null){
            return;
        }
        if(this.head.next==null){
            this.head=null;
            return;
        }
        let secondLast=this.head;
        let lastNode=this.head.next;
        while(lastNode.next !==null){
            lastNode=lastNode.next;
            secondLast=secondLast.next;
        }
        secondLast.next=null;
    }

    print(){
        let currNode=this.head;
        while(currNode !==null){
            console.log(currNode.data+"->")
            currNode=currNode.next;
        }
        console.log("null");
    }
}
const ll=new SLL();
// ll.addFirst(1);
// ll.addFirst(2);
// ll.addFirst(3);
// ll.addFirst(4);
// ll.deleteFirst()
// ll.print()
console.log("======================")
ll.addLast(1);
ll.addLast(2);
ll.addLast(3);
ll.addLast(4);
ll.deleteFirst()
ll.deleteLast()
ll.print();
console.log("======================")
