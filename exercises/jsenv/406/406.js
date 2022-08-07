var reconstructQueue = function (people = []) {
  class Queue406 {
    constructor() {
      this.count = 0;
      this.items = {};
    }
    insertAt(element, index) {
      if (index === this.count) {
        this.items[this.count] = element;
        this.count++;
      } else {
        for (let i = this.count; i > index; i--) {
          this.items[i] = this.items[i - 1];
        }
        this.items[index] = element;
        this.count++;
      }
    }
  }
  const que = new Queue406();
  people.sort((a, b) => b[0] - a[0]);
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : 0));
    // console.log(people);
  for (let i = 0; i < people.length; i++) {
    que.insertAt(people[i], people[i][1]);
    // console.log(Object.values(que.items));
  }
  return Object.values(que.items);
};
console.log(
  reconstructQueue([[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]])
);
