//@ts-ceck
import Node from "./BasicNode.js";
import Queue from "./Queue.js";
export default class Tree {
  constructor() {
    this.root = undefined;
  }
  /**
   * @param {any} val 
   */
  insert(val) {
    if (this.root === undefined) {
      this.root = new Node(val);
    } else {
      const queue = new Queue();
      queue.enqueue(this.root);
      while (queue.size() > 0) {
        let node = queue.peek();
        if (node.val === null) {
          queue.dequeue();
          node = queue.peek();
        }
        if (node.left === undefined) {
          node.left = new Node(val);
          queue.clean();
        } else if (node.right === undefined) {
          node.right = new Node(val);
          queue.clean();
        } else {
          queue.dequeue();
          queue.enqueue(node.left);
          queue.enqueue(node.right);
        }
      }
    }
  }
  /**
   *
   * @param {Node} node
   * @param {any} val
   */
  insertNode(node, val) {
    if (node.left == null) {
      node.left = new Node(val);
    } else if (node.right == null) {
      node.right = new Node(val);
    } else {
      this.insertNode(node.left, val);
    }
  }

  paths() {
    const allPaths = [];
    const buildPath = (parents = [], nodo) => {
      if (nodo.val !== null) {
        parents.push(nodo.val);
      }
      if (nodo.isLeaf() || nodo.val === null) {
        allPaths.push(parents);
      } else {
        if (nodo.left !== undefined) {
          buildPath([...parents], nodo.left);
        }
        if (nodo.right !== undefined) {
          buildPath([...parents], nodo.right);
        }
      }
    };
    buildPath([], this.root);
    allPaths.forEach((e) => {
      console.log(e);
    });
  }

  toString() {
    if (this.root.val === undefined) {
      return "";
    }
    const queue = new Queue();
    queue.enqueue(this.root);
    const objs = [];
    while (queue.size() > 0) {
      let node = queue.dequeue();
      console.log(node);
      if (!node.isLeaf()) {
        queue.enqueue(node.left);
        queue.enqueue(node.right);
      }
    }
    return objs.toString();
  }
}
