class Node {
  constructor(v) {
    this.val = v;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(n) {
    const node = new Node(n);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    else {
      let prevTail = this.tail;
      this.tail = node;
      this.tail.prev = prevTail;
      this.tail.next = null;
      // node.prev = prevTail;
      prevTail.next = this.tail;
      // prevTail.next = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    // const prevTail = this.tail;
    // if (this.length === 1) {
    //   this.head = null;
    //   this.tail = null;
    // }
    // else {
    //   this.tail = this.tail.prev;
    //   this.tail.next = null;
    // }
    // this.length -= 1;
    // return prevTail.val;
    return this.deleteNode(this.tail).val;
  }

  unshift(n) {
    const node = new Node(n);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let prevHead = this.head;
      this.head = node;
      this.head.prev = null;
      this.head.next = prevHead;
      prevHead.prev = this.head;
    }
    this.length += 1;
  }

  shift() {
    // const prevHead = this.head;
    // if (this.length === 1) {
    //   this.head = null;
    //   this.tail = null;
    // }
    // else {
    //   this.head = this.head.next;
    //   this.head.prev = null;
    // }
    // this.length -= 1;
    // return prevHead.val;
    return this.deleteNode(this.head).val;
  }

  delete(v) {
    let node = this.find(v);
    this.deleteNode(node);
  }

  deleteNode(node) {
    if (node) {
      if (node === this.head)
        this.head = node.next;

      if (node === this.tail)
        this.tail = node.prev;

      if (node.next)
        node.next.prev = node.prev;

      if (node.prev)
        node.prev.next = node.next;

      this.length -= 1;
      return node;
    }
    else return null;
  }

  find(v) {
    let found = false;
    let node = this.head;

    while (node && !found) {
      found = node.val === v;
      if (!found) node = node.next;
    }

    return found ? node : null;
  }

  count() {
    return this.length
  }

  // traverse the link to work out the link size instead of keeping track 
  // within object
  count2() {
    let node = this.head;
    let length = 0
    while (node !== null) {
      length += 1;
      node = node.next;
    }
    return length;
  }

}
