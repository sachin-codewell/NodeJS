/*
console.log(computeAmout().thousends(2).lacs(2).crore(5).value())
op - 50202000
*/

function computeAmount() {
    this.amount = 0;
    this.thousends = function(amount) {
        this.amount = this.amount+amount*1000
        return this; //return the same object refference.
    }
    this.lacs = function(amount) {
        this.amount = this.amount+amount*100000
        return this;
    }
    this.crore = function(amount) {
        this.amount = this.amount+amount*10000000
        return this;
    }
    this.value = function() {
        return this.amount;
    }
    return this
}

console.log(computeAmount().thousends(2).lacs(2).crore(5).value())

/*When computeAmount is called with new or as a method, a new object is created, and this inside the function refers to that new object.
this.amount = 0; initializes the amount property on the this object with a value of 0.*/