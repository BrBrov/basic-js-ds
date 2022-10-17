const { NotImplementedError } = require('../extensions/index.js');


const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (this._tree) {
          return this._tree;
      } else {
          return null;
      }
  }

  add(data) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      let node = new Node(data);
      function insert(obj, node) {
          if (obj.data < node.data) {
              if (obj.right === null) {
                  obj.right = node;
              } else {
                  return insert(obj.right, node);
              }
          } else if (obj.data === node.data) {
              return;
          } else {
              if (obj.left === null) {
                  obj.left = node;
              } else {
                  return insert(obj.left, node);
              }
          }
      }

      if (this._tree) {
          insert(this._tree, node);
      } else {
          this._tree = node;
      }
  }

  has(data) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      function findHas(obj, data) {
          if (obj.data === data) {
              return true;
          } else if (obj.left === null && obj.right === null) {
              return false;
          } else {
              let control = {
                  left: false,
                  right: false
              }
              if (obj.right) {
                  control.right = findHas(obj.right, data);
              }
              if (obj.left) {
                  control.left = findHas(obj.left, data);
              }
              return (control.left !== control.right) ? ((control.left === true) ? (control.left) : ((control.right === true) ? (control.right) : (control.left))) : control.left;
          }
      }
      if (this._tree) {
          return findHas(this._tree, data);
      } else {
          return false;
      }
  }

  find(data) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (!data) {
          return 'Please, enter parametr search';
      }
      function findData(obj, value) {
          if (obj.data === value) {
              let output = obj;
              return output;
          } else if (obj.left === null && obj.right === null) {
              return null;
          } else if (obj.right && obj.data < value) {
              return findData(obj.right, value);
          } else if (obj.left && obj.data > value) {
              return findData(obj.left, value);
          }
      }
      if (this._tree) {
          let result = findData(this._tree, data);
          if(result){
              return result;
          }else{
              return null;
          }
      } else {
          return null;
      }
  }

  remove(data) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      function searchChild(obj) {//+
          if (obj.left === null) {
              return obj;
          } else {
              return searchChild(obj.left);
          }
      }
      function delNode(obj, value) {
          if (obj.data > value) {
              obj.left = delNode(obj.left, value);
              return obj;
          } else if (obj.data < value) {
              obj.right = delNode(obj.right, value);
              return obj;
          } else if (obj.data === value && obj.left === null && obj.right === null) {
              obj = null;
              return obj;
          } else if (obj.data === value && obj.right === null) {
              obj = obj.left;
              return obj;
          }else if(obj.data === value && obj.left === null){
              obj = obj.right;
              return obj;
          } else if (obj.data === value) {
              if (obj.right.left === null) {
                  obj.data = obj.right.data;
                  delNode(obj.right, obj.right.data);
                  return obj;
              } else {
                  let child = searchChild(obj.right.left);
                  obj.data = child.data;                    
                  delNode(obj.right, child.data);
                  return obj;
              }
          }
      }
      if (!data) {
          return 'Insert value for delete!';
      } else {
          delNode.call(this, this._tree, data);
      }
  }

  min() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      function minFind(obj){
          if(obj.left){
              return minFind(obj.left);
          }else{
              return obj.data;
          }
      }
      return minFind(this._tree);
  }

  max() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      function maxFind(obj){
          if(obj.right){
              return maxFind(obj.right);
          }else{
              return obj.data;
          }
      }
      return maxFind(this._tree);
  }
}

module.exports = {
  BinarySearchTree
};