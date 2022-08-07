import Node from "./BasicNode.js";
export default class Queue {
  constructor() {
    this.count = 0;
    this.pointer = 0;
    this.items = {};
  }
  size() {
    return this.count - this.pointer;
  }
  enqueue(value) {
    if (value == null) {
      return undefined;
    }
    this.items[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.size() === 0) {
      return undefined;
    }
    const aux = this.items[this.pointer];
    delete this.items[this.pointer];
    this.pointer++;
    return aux;
  }

  peek() {
    if (this.size === 0) {
      return undefined;
    }
    return this.items[this.pointer];
  }
  clean() {
    this.count = 0;
    this.pointer = 0;
    this.items = {};
  }
}
