function swapNode(head){
    
    // handling corner cases;
    if(!head || !head.next) return head;
    
    // making this for maintaining the previous position for swapping
    
    let sentinel = new Node();
    sentinel.next=head;

    let p=sentinel;
    let c=head;
    let n=head.next;

    while(c && n){
        p.next=n;
        c.next=n.next;
        n.next=c;

        p=c;
        c=p.next;
        n= c && c.next;
    }

    return sentinel.next;
}