
// implementation  of linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class SLL{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    // add first elemenet in linked list
    addFirst(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
        this.size++
    }
    // add last elemenet in linked list
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
        this.size++
        currNode.next=newNode;
    }
    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.data+"->");
            curr=curr.next;
        }
        console.log("Null")
    }
    size_ll(){
        console.log(this.size)
    }
}
let ll=new SLL();
ll.addFirst(1);
// ll.addFirst(2);
// ll.addFirst(3);
// ll.addFirst(4);
// ll.addFirst(5);



// ll.addLast(0);
// ll.addLast(1);
// ll.addLast(2);
// ll.addLast(3);
// ll.addLast(4);
// ll.addLast(5);
ll.print();
ll.size_ll()