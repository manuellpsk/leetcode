//@ts-check
import Tree from "../models/BasicBst.js";
import Node from "../models/BasicNode.js";

/**
 * @param {Node} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let wasFound = false;
  const buildPath = (parents = [], nodo) => {
    if (wasFound || nodo == null) {
      return;
    }
    if (nodo.val != null) {
      parents.push(nodo.val);
    }
    if ((nodo.left == null && nodo.right == null) || nodo.val == null) {
      const s = parents.reduce((a, b) => a + b, 0);
      if (s === targetSum) {
        wasFound = true;
      }
    } else {
      if (nodo.left != null) {
        buildPath([...parents], nodo.left);
      }
      if (nodo.right != null) {
        buildPath([...parents], nodo.right);
      }
    }
  };
  buildPath([], root);
  return wasFound;
};
let tree = new Tree();
[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1].map((e) => {
  tree.insert(e);
});

console.log(tree.paths());

console.log(hasPathSum(tree.root, 22));
