class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class SLL{
    constructor(){
        this.head=null;
        this.size=0;
    }

    // add first element in ll
    addFirst(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
    }
    // delete first element in ll
    deleteFirst(){
        if(this.head == null){
            console.log("empty linked list")
            return;
        }
        this.head=this.head.next;
    }
    print(){
        let currNode=this.head;
        while(currNode !==null){
            console.log(currNode.data +"->")
            currNode=currNode.next
        }
        console.log("null")
    }
}
let ll=new SLL()
ll.addFirst(4);
ll.addFirst(3);
ll.addFirst(2);
ll.addFirst(1);

ll.deleteFirst();
ll.deleteFirst();
ll.print()