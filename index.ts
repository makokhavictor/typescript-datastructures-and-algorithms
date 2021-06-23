// Import stylesheets
import { Stack } from './stack';
import { Queue } from './queue';

// let stack = new Stack(2);
// stack.push(1);
// stack.push(2);
// console.log(stack.pop());
// console.log(stack.pop());

let queue = new Queue(2);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();

