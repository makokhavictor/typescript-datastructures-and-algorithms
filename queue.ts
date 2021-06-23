export class Queue {
  front: number;
  rear: number;
  capacity: number;
  arr: any[];

  constructor(size: number) {
    this.front = -1;
    this.rear = -1;
    this.capacity = size;
    this.arr = new Array(size);
  }

  isFull() {
    return this.front == 0 && this.rear == this.capacity - 1;
  }
  isEmpty() {
    return this.front == -1;
  }

  enqueue(elem: any) {
    if (this.isFull()) {
      console.log('The queue is full!');
    } else {
      if (this.front == -1) this.front = 0;
      this.arr[this.rear++] = elem;
      console.log(this.arr);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('The queue is empty');
    } else {
      // Get element to dequeue
      let elem: any = this.arr[this.front];
      if (this.front >= this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front++;
      }

      console.log(this.arr);
    }
  }

  peek() {}
}
