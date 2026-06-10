class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        // dummy head (most recent) <-> ... <-> dummy tail (least recent)
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);
        this._moveToHead(node);
        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this._moveToHead(node);
            return;
        }

        const node = new Node(key, value);
        this.cache.set(key, node);
        this._addToHead(node);

        if (this.cache.size > this.capacity) {
            const lru = this._removeTail();
            this.cache.delete(lru.key);
        }
    }

    _addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    _removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _moveToHead(node) {
        this._removeNode(node);
        this._addToHead(node);
    }

    _removeTail() {
        const lru = this.tail.prev;
        this._removeNode(lru);
        return lru;
    }
}

// ----------- Run Test -----------

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log("get(1):", cache.get(1)); // 1

cache.put(3, 3); // evicts key 2
console.log("get(2):", cache.get(2)); // -1

cache.put(4, 4); // evicts key 1
console.log("get(1):", cache.get(1)); // -1
console.log("get(3):", cache.get(3)); // 3
console.log("get(4):", cache.get(4)); // 4