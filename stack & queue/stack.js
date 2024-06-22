
// What is a stack data structure?- The stack consists of a series of items that are added to the top of the stack and then removed from the top. It is a linear data structure that follows a particular order in which operations are performed. LIFO (Last In First Out) or FILO (First In Last Out) are two possible orders.

// Stack implementation using linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
    }
    isEmpty(){
        return this.head==null
    }
    
    push(data){
        let newNode=new Node(data);
        if(this.isEmpty()){
            this.head=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
    }

    pop(){
        if(this.isEmpty()){
            return -1
        }
        let top=this.head.data;
        this.head=this.head.next;
        return top;
    }

    peek(){
        if(this.isEmpty()) return -1;

        return this.head.data;
    }
}

let s=new Stack()
s.push(1)
s.push(2)
s.push(3)

while(!s.isEmpty()){
    console.log(s.peek())
    s.pop()
}