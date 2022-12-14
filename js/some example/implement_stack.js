// implement stack using array list

class Stack{
    constructor(){
        this.item=[];
    }
    // add element in stack
    add(data){
        return this.item.push(data);
    }

    // remove element in stack
    remove(){
        if(this.item.length>0){
            return this.item.pop();
        }
    }

    // top of the lement 
    peek(){
        return this.item[this.item.length-1];
    }

    // check empty
    isEmpty(){
        return this.item.length==0
    }

    size(){
        return this.item.length;
    }

    clear(){
        this.item=[];
    }
}
let s=new Stack();
s.add(1);
s.add(2);
s.add(4);
s.add(8);
console.log(s.item)

s.remove()
console.log(s.item)

console.log(s.peek());
console.log(s.isEmpty())
console.log(s.size())
s.clear();
console.log(s.item)