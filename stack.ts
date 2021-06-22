export class Stack {
  top: number;
  capacity: number;
  arr: any[];

  constructor(size: number) {
    this.arr = new Array(size);
    this.top = -1;
    this.capacity = size;
  }

  isEmpty() {
    return this.top == -1;
  }

  isFull() {
    return this.top == this.capacity - 1;
  }

  push(elem: any) {
    if (this.isFull()) {
      console.log('Ooops stack is full');
    } else {
      this.top += 1;
      this.arr[this.top] = elem;
      console.log(this.arr, elem);
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Oooops stack is empty');
    } else {
      this.top -= 1;
      return this.arr[this.top];
    }
  }
}
