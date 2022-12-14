class Node{
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}
class SLL{
    constructor() {
        this.head=null;
        this.size=0;
    }

    // add last elemenet in ll
    addLast(data){
        let  newNode=new Node(data);
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

    // delete last elmenet in ll
    deleteLast(){
        if(this.head==null){
            console.log("this list is empty")
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
        secondLast.next=null
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
const ll=new SLL()
ll.addLast(1);
ll.addLast(2);
ll.print()
ll.deleteLast()
ll.print()