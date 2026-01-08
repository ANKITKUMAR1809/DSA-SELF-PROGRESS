// 1 -> 2 -> 3 -> 2 -> 1 -> null
function isPallindrome (head){
    // finding mid by fast and slow method
    let fast=slow=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    
    // now we find the midd as slow 
    // now reverse the linkedlist from mid to null;
    let curr=slow;
    let prev=null;
    while(curr){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    // after this we got the reverse list from mid to null that is prev;
    let second = prev;
    let first=head;
    while(second){
        if(first.val!=second.val){
            return false;
        }
        first=first.next;
        second=second.next;
    }
    return true;
}