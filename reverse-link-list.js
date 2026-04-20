class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function reverseList(head){
    let current = head;
    let prev = null;
    let after = null;

    while(current !== null){
        after = current.next;
        current.next = prev;
        prev = current;
        current = after;
    }
    return prev;
}


// Create list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Reverse list
let reversed = reverseList(head);

// Print result
let temp = reversed;
let output = [];

while (temp !== null) {
    output.push(temp.val);
    temp = temp.next;
}

console.log(output.join(" -> "));