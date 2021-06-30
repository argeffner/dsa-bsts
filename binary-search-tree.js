class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let n = this.root;
    while (true) {
      if ( n.val > val) {
        if (n.left === null) {
          n.left = new Node(val);
          return this
        } else {
          n = n.left;
        }
      } else if (n.val < val) {
        if (n.right === null) {
          n.right = new Node(val);
          return this;
        } else {
          n = n.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    
    function addNode(val, n) {
      if ( n.val > val) {
        if (n.left === null) {
          n.left = new Node(val);
          return this
        } 
        return addNode(val, n.left);
        } else {
        if (n.right === null) {
          n.right = new Node(val);
          return this;
        } 
        return addNode(val, n.right)
        }
      } 

    return addNode(val, this.root)
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let n = this.root;
    let found = false;
    if (n.val === val) return n;
    
    while(n && !found) {
      if (n.val > val) {
        n = n.left;
      } else if (n.val < val) {
        n = n.right
      } else {
        // to cancel the loop if found
        found = true
      }
    }
    //  once loop is finished found becomes true
    if (!found) return undefined;
    return n;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    if (this.root === null) return undefined;
    
    function findIt(val, n) {
      if (n.val > val) {
        if (n.left === null) return undefined;
        return findIt(val, n.left);
      } else if (val > n.val) {
        if (n.right === null) return undefined;
        return findIt(val, n.right);
      }
    }
    return findIt(val, this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = []

    function traverse(n) {
      arr.push(n.val);
      if (n.left) traverse(n.left);
      if (n.right) traverse(n.right);
    }

    traverse(this.root)
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = []

    function traverse(n) {
      if (n.left) traverse(n.left);
      arr.push(n.val);
      if (n.right) traverse(n.right);
    }

    traverse(this.root)
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = []

    function traverse(n) {
      if (n.left) traverse(n.left);
      if (n.right) traverse(n.right);
      arr.push(n.val);
    }

    traverse(this.root)
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let n = this.root;
    let queue = [];
    let arr = [];

    queue.push(n)

    while (queue.length) {
      n = queue.shift();
      arr.push(n.val) 
      if (n.left) {
        queue.push(n.left)
      }
      if (n.right) {
        queue.push(n.right);
      }
    }
    return arr;
 }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    if (!this.root) return;

    function maxDepth(n) {
      if (n === null) return 0;
      // if (n.left === null && n.right === null) return 1;
      // if (n.left === null) return maxDepthBinary(n.right) + 1;
      // if (n.right === null) return maxDepthBinary(n.left) + 1;
      return Math.max(maxDepthBinary(n.left), maxDepthBinary(n.right)) + 1
    }

    function minDepth(n) {
      if (n === null) return 0;
      // if (n.left === null && n.right === null) return 1;
      // if (n.left === null) return minDepthBinary(n.right) + 1;
      // if (n.right === null) return minDepthBinary(n.left) + 1;
      return Math.min(minDepthBinary(n.left), minDepthBinary(n.right)) + 1;
    }
    // average is max - min
    return maxDepth(this.root) - minDepth(this.root);  
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
