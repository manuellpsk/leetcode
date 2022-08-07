import { Deque } from "../models/models.js";
function hotPotato(list, num) {
  const deque = new Deque();
  const eliminatedList = [];
  // add elements list to deque
  list.forEach((element) => {
    deque.addBack(element);
  });
  // logic game
  while (deque.size() > 1) {
    for (let i = 0; i < num; i++) {
      deque.addBack(deque.dequeue());
    }
    console.log(`${deque.peek()} will be eliminated`);
    eliminatedList.push(deque.dequeue());
  }
  return {
    eliminatedList,
    winner: deque.dequeue(),
  };
}
export function playHotPotato() {
  const participants = ["Jhon", "Jack", "Camila", "Ingrid", "Carl"];
  const { winner } = hotPotato(participants, 7);
  console.log(`Winner: ${winner}`);
}
