// Kth Largest Element in a Stream

class MinHeap {
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    front() {
        return { element: this.data[0] };
    }

    enqueue(value) {
        this.data.push(value);
        this._bubbleUp(this.data.length - 1);
    }

    dequeue() {
        if (this.data.length === 0) return undefined;
        const min = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this._bubbleDown(0);
        }
        return min;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.data[parentIndex] <= this.data[index]) break;
            [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
            index = parentIndex;
        }
    }

    _bubbleDown(index) {
        const length = this.data.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.data[left] < this.data[smallest]) {
                smallest = left;
            }

            if (right < length && this.data[right] < this.data[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;
            [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
            index = smallest;
        }
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();
        
        // Add initial numbers to the min-heap
        for (let num of nums) {
            this.add(num);
        }
    }
    
    add(val) {
        // Add new value to the min-heap
        this.minHeap.enqueue(val);
        
        // If the size of the min-heap exceeds k, remove the smallest element
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
        
        // The root of the min-heap is the kth largest element
        return this.minHeap.front().element;
    }
}

// Example usage:
let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));  // returns 4
console.log(kthLargest.add(5));  // returns 5
console.log(kthLargest.add(10)); // returns 5
console.log(kthLargest.add(9));  // returns 8
console.log(kthLargest.add(4));  // returns 8
