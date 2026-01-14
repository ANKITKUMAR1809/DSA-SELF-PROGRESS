function rotateList(head, k) {
  if (!head || !head.next) return head;

  let curr = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }

  if (k % length === 0) {
    return head;
  }

  let first = (second = head);
  for (let i = 0; i < (k % length); i++) {
    first=first.next;
  }

  while(first.next){
    second=second.next;
    first=first.next;
  }

  let newHead= second.next;
  second.next=null;
  first.next=head;

  return newHead;
}
