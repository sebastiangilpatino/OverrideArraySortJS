Array.prototype.sort = function () {
    for (let index = 0; index < this.length; index++) {
        if (typeof (this[index]) != 'number') {
            return;
        }
    }

    let cur = 0;
    let j = 0;
    while (cur < this.length) {
        let ind = 0;
        let minimum = Number.MAX_SAFE_INTEGER;

        for (let index = cur; index < this.length; index++) {
            if (this[index] < minimum) {
                minimum = this[index];
                ind = index;
            }
        }

        this.splice(ind, 1);
        this.splice(j++, 0, minimum)

        cur++;
    }

    return this;
}

let numbers = [10, 1, 9, 5];
console.log(numbers.sort());
