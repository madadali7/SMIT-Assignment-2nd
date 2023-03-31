
abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    rented: boolean;
    isStarted: boolean;


    constructor(make: string, model: string, year: number, rented: boolean, isStarted: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
        this.isStarted = isStarted;
    }

    getMake(): string {
        return this.make;
    }
    getModel(): string {
        return this.model;
    }
    getYear(): number {
        return this.year;
    }
    getRented(): boolean {
        return this.rented;
    }

    setRented(rented: boolean) {
        this.rented = rented;
    }

    engineStatus(): boolean {
        return this.isStarted;
    }

    startEngine() {
        !this.isStarted ? this.isStarted = true : console.warn('The engine is already started.');
    }


    offEngine() {
        this.isStarted ? this.isStarted = false : console.warn('The engine is already off.');
    }

    abstract rentalRate(): number;

    rent() {
        if (this.rented) {
            alert('The Vehical is Already Rented')
        } else {
            this.setRented(true)
        }
    }

    return() {
        if (this.rented) {
            this.setRented(false);
        }
    }
}

class Car extends Vehicle {
    maxSpeed: number;
    totalSeat: number;

    constructor(make: string, model: string, price: number, rented: false, isStarted: boolean, maxSpeed: number, totalSeat: number) {
        //We use Super because the Car is a child class and for getting parent class variable we use Super.
        super(make, model, price, rented, isStarted)
        this.maxSpeed = maxSpeed;
        this.totalSeat = totalSeat;
    }

    rentalRate(): number {
        return 25000;
    }

    getMaxSpeed(): number {
        return this.maxSpeed;
    }
    getTotalSeat(): number {
        return this.totalSeat;
    }
}

class Truck extends Vehicle {
    maxSpeed: number;
    totalSeat: number;

    constructor(make: string, model: string, year: number, rented: false, isStarted: boolean, maxSpeed: number, totalSeat: number) {
        super(make, model, year, rented, isStarted)
        this.maxSpeed = maxSpeed;
        this.totalSeat = totalSeat;
    }

    rentalRate(): number {
        return 50000
    }

    getMaxSpeed(): number {
        return this.maxSpeed;
    }
    getTotalSeat(): number {
        return this.totalSeat;
    }
}

class Motorcycle extends Vehicle {
    maxSpeed: number;
    totalSeat: number;

    constructor(make: string, model: string, year: number, rented: false, isStarted: boolean, maxSpeed: number, totalSeat: number) {
        super(make, model, year, rented, isStarted)
        this.maxSpeed = maxSpeed;
        this.totalSeat = totalSeat;
    }

    rentalRate(): number {
        return 15000
    }

    getMaxSpeed(): number {
        return this.maxSpeed;
    }
    getTotalSeat(): number {
        return this.totalSeat;
    }
}


//------------------------------------------------------------------------------------------------------------//

let hondaCivic = new Car('2022', '2021', 2022, false, false, 350, 5);
let toyotaCorrola = new Car('2018', '2020', 2019, false, false, 280, 5);



console.log('Honda Civic');
console.log('\n');
console.log('Honda Civic Make: ', hondaCivic.getMake());
console.log('Honda Civic Model: ', hondaCivic.getModel());
console.log('Honda Civic Year: ', hondaCivic.getYear());
console.log('Honda Civic Rented: ', hondaCivic.getRented());
console.log('Honda Civic Max Speed: ', hondaCivic.getMaxSpeed());
console.log('Honda Civic Total Seat: ', hondaCivic.getTotalSeat());
console.log('Honda Civic Rental Rate: ', hondaCivic.rentalRate());

console.log('\n');
console.log('Is Honda Civic Engine stared: ', hondaCivic.engineStatus());

console.log('Please Start the Engine');
hondaCivic.startEngine();
console.log((hondaCivic.engineStatus()) ? 'The Engine is Started' : 'The Engine is Off');
hondaCivic.startEngine();



console.log('Please Off the Engine');
hondaCivic.offEngine()
console.log((hondaCivic.engineStatus()) ? 'The Engine is Started' : 'The Engine is Off');
hondaCivic.offEngine()






hondaCivic.rent();

console.log('Honda Civic After Rented: ', hondaCivic.getRented());

hondaCivic.return();

console.log('Honda Civic After Return: ', hondaCivic.getRented());

hondaCivic.setRented(true);

console.log('Set Honda Civic as Rent: ', hondaCivic.getRented());
console.log('\n');




//------------------------------------------------------------------------------------------------------------//

let mercedesTruck = new Truck('2011', '2010', 2012, false, false, 400, 30);


console.log('Mercedes Truck ');
console.log('\n');
console.log('Mercedes Truck Make: ', mercedesTruck.getMake());
console.log('Mercedes Truck Model: ', mercedesTruck.getModel());
console.log('Mercedes Truck Year: ', mercedesTruck.getYear());
console.log('Mercedes Truck Rented: ', mercedesTruck.getRented());
console.log('Mercedes Truck Max Speed: ', mercedesTruck.getMaxSpeed());
console.log('Mercedes Truck Total Seat: ', mercedesTruck.getTotalSeat());
console.log('Mercedes Truck Rental Rate: ', mercedesTruck.rentalRate());

mercedesTruck.rent();

console.log('Mercedes Truck After Rented: ', mercedesTruck.getRented());

mercedesTruck.return();

console.log('Mercedes Truck After Return: ', mercedesTruck.getRented());

mercedesTruck.setRented(true);

console.log('Set Mercedes Truck as Rent: ', mercedesTruck.getRented());
console.log('\n');

//------------------------------------------------------------------------------------------------------------//


let kawasakiNinja360 = new Motorcycle('2006', '2012', 2007, false, false, 650, 2);


console.log('Kawasaki Ninja 360 ');
console.log('\n');
console.log('Kawasaki Ninja 360 Make: ', kawasakiNinja360.getMake());
console.log('Kawasaki Ninja 360 Model: ', kawasakiNinja360.getModel());
console.log('Kawasaki Ninja 360 Year: ', kawasakiNinja360.getYear());
console.log('Kawasaki Ninja 360 Rented: ', kawasakiNinja360.getRented());
console.log('Kawasaki Ninja 360 Max Speed: ', kawasakiNinja360.getMaxSpeed());
console.log('Kawasaki Ninja 360 Total Seat: ', kawasakiNinja360.getTotalSeat());
console.log('Kawasaki Ninja 360 Rental Rate: ', kawasakiNinja360.rentalRate());


kawasakiNinja360.rent();

console.log('Kawasaki Ninja 360 After Rented: ', kawasakiNinja360.getRented());

kawasakiNinja360.return();

console.log('Kawasaki Ninja 360 After Return: ', kawasakiNinja360.getRented());

kawasakiNinja360.setRented(true);

console.log('Set Kawasaki Ninja 360 as Rent: ', kawasakiNinja360.getRented());

//------------------------------------------------------------------------------------------------------------//
