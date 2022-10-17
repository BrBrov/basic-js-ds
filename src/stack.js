const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.hasOwnProperty('_stack')){
      this._stack.push(element);
    }else{
      this._stack = [];
      this._stack.push(element);
    }
  }
  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.hasOwnProperty('_stack')){
      return this._stack.pop();
    }else{
      return 'Stack is empty';
    }
  }
  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.hasOwnProperty('_stack')){
      return this._stack[this._stack.length - 1];
    }else{
      return 'Stack is empty';
    }
  }
}

module.exports = {
  Stack
};
