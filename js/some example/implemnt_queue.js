// A queue is a data structure that follows First In First Out (FIFO) principle. The element that is added first is accessed at first. This is like being in a queue to get a movie ticket. The first one gets the ticket first.

class Queue{
    constructor(){
        this.item=[];
    }
    // add element in queue
    enqueue(data){
        return this.item.push(data);
    }

    // remove element in queue
    dequeue(){
        if(this.item.length>0){
            return this.item.shift();
        }
    }

    // view last element in queue
    peek(){
        return this.item[this.item.length-1];
    }

    // check queue is empty
    isEmpty(){
        return this.item.length===0;
    }

    // size of the queue
    size(){
        return this.item.length;
    }
}

let q=new Queue();
q.enqueue(1);
q.enqueue(2)
q.enqueue(4)
q.enqueue(8)
console.log(q.item)

q.dequeue();
console.log(q.peek());
console.log(q.isEmpty());
console.log(q.size())