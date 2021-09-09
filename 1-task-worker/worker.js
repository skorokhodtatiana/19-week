class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        console.log(this.rate * this.days);
    }
}

let newWorker = new Worker('Tanja', 'Skorokhod', 3, 20);
console.log(newWorker.name);
console.log(newWorker.surname);
console.log(newWorker.rate);
console.log(newWorker.days);
newWorker.getSalary();