class Vehicle {
    constructor (str1, str2, num) {
        this.make = str1
        this.model = str2
        this.year = num
    }

    honk() {
        return 'Beep'
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
};


class Car extends Vehicle {
    constructor (str1, str2, num) {
        super(str1, str2, num)
        this.numWheels = 4
    }
};

class Motorcycle extends Vehicle {
    constructor (str1, str2, num) {
        super(str1, str2, num)
        this.numWheels = 2
    }

    revEngine() {
        return 'VROOM!!!'
    }
};

class Garage {
    constructor(num) {
        this.vehicles = []
        this.capacity = num
    }

    add(vehicle) {
        if(!(vehicle instanceof Vehicle)){
            throw new Error ('Only vehicles are allowed in here!')
        }

        else if(this.vehicles.length === this.capacity) {
            throw new Error ("Sorry, we're full.")
        }

        else {
            this.vehicles.push(vehicle)
        }

    }
};
