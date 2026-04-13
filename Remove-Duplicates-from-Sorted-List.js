class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function deleteDuplicates(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

// Create sorted list: 1 -> 1 -> 2 -> 3 -> 3
let a = new ListNode(1);
let b = new ListNode(1);
let c = new ListNode(2);
let d = new ListNode(3);
let e = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// Remove duplicates
let result = deleteDuplicates(a);

let temp = result;
let output = [];
while(temp !== null){
    output.push(temp.val);
    temp = temp.next;
}

console.log(output.join(" -> "));