// 👉 Remove all nodes that have duplicates
// 👉 Only keep values that appear exactly once

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function deleteDuplicates(head){
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    while(head != null){

        if(head.next !== null && head.val === head.next.val){
            let duplicateVal = head.val;

        while(head != null && head.val === duplicateVal){
            head = head.next;
        }

        prev.next = head; // remove duplicates
        }else{
            prev = prev.next;
            head = head.next;
        }
    }

    return dummy.next;
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

let result = deleteDuplicates(a);

// Print result
let temp = result;
let output = [];

while (temp !== null) {
    output.push(temp.val);
    temp = temp.next;
}

console.log(output.join(" -> "));