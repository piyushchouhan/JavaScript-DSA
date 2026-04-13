class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function detectCycle(head){
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast){
            let pointer = head;

            while(pointer !== slow){
                pointer = pointer.next;
                slow = slow.next;
            }

            return pointer;
        }
    }

    return null;
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);

// Link nodes
a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle starts at node b

let cycleStart = detectCycle(a);

if (cycleStart) {
    console.log("Cycle starts at:", cycleStart.val);
} else {
    console.log("No cycle");
}