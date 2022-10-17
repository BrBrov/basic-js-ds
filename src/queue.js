const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
    getUnderlyingList() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (this._queue) {
            return this._queue;
        } else {
            return 'This queue is empty';
        }
    }

    enqueue(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        function insertion(obj, insertNode){
            if(obj.next === null){
                obj.next = insertNode;
            }else{
                insertion(obj.next, insertNode);
            }
        }
        let node = new ListNode(value);
        if (this._queue) {
            insertion(this._queue, node);            
        } else {
            this._queue = {};
            Object.assign(this._queue, node);
        }
    }
    dequeue() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        function del(obj){
            if(obj.next.next === null){
                obj.value = obj.next.value;
                obj.next = null;
            }else{
                obj.value = obj.next.value
                return del(obj.next);
            }
        }

        if (this._queue) {
            let result = this._queue.value;
            del(this._queue);
            return result;            
        } else {
            return 'This queue is empty';
        }
    }
}

module.exports = {
  Queue
};
