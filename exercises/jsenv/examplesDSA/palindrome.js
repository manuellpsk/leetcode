import { Deque } from "../models/models.js";
export function isPalindrome(word) {
  //   const originalWord = word;
  //   const deque = new Deque();
  //   for (let i = 0; i < word.length; i++) {
  //     deque.addFront(word[i]);
  //   }
  //   let resultWord = word ? "" : null;
  //   if (typeof resultWord === "string") {
  //     while (deque.size() > 0) {
  //       resultWord += deque.dequeue();
  //     }
  //   }
  //   console.log({ originalWord });
  //   console.log({ resultWord });
  //   return originalWord === resultWord;
  if (!word) return undefined;
  const deque = new Deque();
  const wordToLower = word.toLowerCase();
  let isEqual = true;
  for (let i = 0; i < wordToLower.length; i++) {
    deque.addBack(wordToLower.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    let first = deque.removeFront();
    let last = deque.removeBack();
    if (first !== last) {
      isEqual = false;
    }
  }
  return isEqual;
}
