class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class SLL{
    constructor(){
        this.head=null;
        this.size=0;
    }
    // add last element in ll
    addLast(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            return;
        }
        let currNode=this.head;
        while(currNode.next !==null){
            currNode=currNode.next
        }
        currNode.next=newNode;
    }
    print(){
        let currNode=this.head;
        while(currNode !==null){
            console.log(currNode.data+"->")
            currNode=currNode.next;
        }
        console.log("null")
    }
}
let ll=new SLL();
ll.addLast(1);
ll.addLast(2);
ll.addLast(3);
ll.addLast(4);
ll.print()