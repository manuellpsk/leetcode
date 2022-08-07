export default class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
  isLeaf() {
    return this.left === undefined && this.right === undefined;
  }
  toString() {
    return `val: ${this.val}, left: ${this.left}, right: ${this.right}`;
  }
}
