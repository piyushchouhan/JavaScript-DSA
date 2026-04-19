class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function addTwoNumbers(l1, l2){
    let dummy = new ListNode(0);
    let current = dummy;

    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0){
        let sum = carry;
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
}

// l1 = 2 -> 4 -> 3  (represents 342)
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

// l2 = 5 -> 6 -> 4  (represents 465)
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let result = addTwoNumbers(l1, l2);

// Print result
let temp = result;
let output = [];

while (temp !== null) {
    output.push(temp.val);
    temp = temp.next;
}

console.log(output.join(" -> "));