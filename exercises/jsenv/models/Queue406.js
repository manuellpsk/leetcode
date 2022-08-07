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
      this.count[index] = element;
      this.count++;
    }
  }
}
