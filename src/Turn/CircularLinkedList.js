import { immerable } from 'immer';

class ListNode {
  [immerable] = true;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class CircularLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(data) {
    let newNode = new ListNode(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next !== this.head) {
        tail = tail.next;
      }
      tail.next = newNode;
    }

    newNode.next = this.head;
  }
}
