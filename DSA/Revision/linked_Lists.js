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
    addFirst(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode
            return
        }
        newNode.next=this.head;
        this.head=newNode;
        this.size++
    }

    addLast(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode
            return;
        }
        let currNode=this.head;
        while(currNode.next !==null){
            currNode=currNode.next
        }
        this.size++
        currNode.next=newNode;
    }

    deleteFirst(){
        if(this.head==null) return
        this.head=this.head.next;
        this.size--;
    }

    deleteLast(){
        if(this.head==null) return
        if(this.head.next==null){
            this.head=null
            return
        }

        let secondLast=this.head;
        let lastNode=this.head.next;
        while(lastNode.next !==null){
            lastNode=lastNode.next;
            secondLast=secondLast.next
        }
        secondLast.next=null;
        this.size--;
    }

    print(){
        let currNode=this.head;
        while(currNode !==null){
            console.log(currNode.data, "->")
            currNode=currNode.next;
        }
        console.log("Null")
    }
    isEmpty(){
        return this.size===0
    }
    letngth(){
        return ++this.size
    }
}

let ll=new SLL();
// ll.addFirst(1);
// ll.addFirst(2);
// ll.addFirst(3);
// ll.deleteFirst()

ll.addLast(1);
ll.addLast(2);
ll.addLast(3);
ll.addLast(4);
ll.deleteLast()
ll.print();
console.log(ll.isEmpty());
console.log(ll.letngth())