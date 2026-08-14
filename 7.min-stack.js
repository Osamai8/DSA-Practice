// The question, in normal words 
// Build a class called MinStack. A stack is a pile: you can only add to the top and only remove from the top, like a stack of plates.
// It must support four things:
// push(x) puts the number x on top of the pile.
// pop() removes the number on top.
// top() tells you which number is on top without removing it.
// getMin() tells you the smallest number anywhere in the pile.
// The catch is in the last one. getMin() must answer in constant time, written O(1), which means the answer takes the same amount of work whether the pile holds three numbers or three million.


class MinStack {
    constructor() {
        this.mainStack = [];
        this.minStack = [];
    }
    push(value) {
        const min = !this.mainStack.length ? value : Math.min(value, this.getMin());
        this.mainStack.push(value);
        this.minStack.push(min);
    }
    pop() {
        this.minStack.pop();
        return this.mainStack.pop();
    };
    top() { return this.main[this.main.length - 1]; }
    getMin() { return this.mins[this.mins.length - 1]; }
}


// ---------------------- OR ------------------------------


var MinStack = function () {
    this.mainStack = [];
    this.minStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    const min = !this.mainStack.length ? value : Math.min(value, this.getMin());
    this.mainStack.push(value);
    this.minStack.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minStack.pop();
    return this.mainStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.mainStack[this.mainStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};
