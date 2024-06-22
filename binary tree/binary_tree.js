// inorder traverse in binary tree

class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      let newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  
    find(value) {
      if (this.root === null) return false;
      var current = this.root;
      var found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return undefined;
      return current;
    }
  
    contains(value) {
      if (this.root === null) return false;
      var current = this.root,
        found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }
  
    BSF() {
      // level order traversal
      let data = [];
      let queue = [];
      let node = this.root;
      queue.push(node);
      while (queue.length) {
        node = queue.shift();
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return data;
    }
  
    DFSPreOrder(){
      let data=[];
      function traverse(node){
          data.push(node.value);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
    }
  
    DFSPostOrder(){
      let data=[];
      function traverse(node){
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
          data.push(node.value);
      }
      traverse(this.root);
      return data;
    }
    DFSInOrder(){
      let data=[];
      function traverse(node){
          if(node.left) traverse(node.left);
          data.push(node.value);
          if(node.right) traverse(node.right);
          
      }
      traverse(this.root);
      return data;
    }
  }
  let bst= new BST();
  bst.insert(10);
  bst.insert(6);
  bst.insert(15);
  bst.insert(3);
  bst.insert(8);
  bst.insert(20);
  console.log(bst)
  console.log(bst.DFSInOrder())
  console.log("=========")
  console.log(bst.DFSPostOrder())
  console.log("============")
  console.log(bst.DFSPreOrder())
  console.log("==========")
  console.log(bst.BSF())
  