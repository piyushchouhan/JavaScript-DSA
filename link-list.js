class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// function to detect if a linked list has a cycle
function hasCycle(head){
    if(!head || !head.next) return false;
    
    let slow = head;
    let fast = head;

    while(fast !== null && fast.mext !== null ){
          slow = slow.next;
          fast = fast.next.next;

          if(slow === fast){
                return true;
          }
    }
    return false;
}

// Create nodes
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

// Connect nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Create cycle (IMPORTANT LINE)
node4.next = node2; // cycle here

// ----------- Run Test -----------

console.log("Cycle exists:", hasCycle(node1));