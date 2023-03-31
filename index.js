var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented, isStarted) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
        this.isStarted = isStarted;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.getRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.engineStatus = function () {
        return this.isStarted;
    };
    Vehicle.prototype.startEngine = function () {
        !this.isStarted ? this.isStarted = true : console.warn('The engine is already started.');
    };
    Vehicle.prototype.offEngine = function () {
        this.isStarted ? this.isStarted = false : console.warn('The engine is already off.');
    };
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            alert('The Vehical is Already Rented');
        }
        else {
            this.setRented(true);
        }
    };
    Vehicle.prototype.return = function () {
        if (this.rented) {
            this.setRented(false);
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, price, rented, isStarted, maxSpeed, totalSeat) {
        var _this = 
        //We use Super because the Car is a child class and for getting parent class variable we use Super.
        _super.call(this, make, model, price, rented, isStarted) || this;
        _this.maxSpeed = maxSpeed;
        _this.totalSeat = totalSeat;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 25000;
    };
    Car.prototype.getMaxSpeed = function () {
        return this.maxSpeed;
    };
    Car.prototype.getTotalSeat = function () {
        return this.totalSeat;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, isStarted, maxSpeed, totalSeat) {
        var _this = _super.call(this, make, model, year, rented, isStarted) || this;
        _this.maxSpeed = maxSpeed;
        _this.totalSeat = totalSeat;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 50000;
    };
    Truck.prototype.getMaxSpeed = function () {
        return this.maxSpeed;
    };
    Truck.prototype.getTotalSeat = function () {
        return this.totalSeat;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, isStarted, maxSpeed, totalSeat) {
        var _this = _super.call(this, make, model, year, rented, isStarted) || this;
        _this.maxSpeed = maxSpeed;
        _this.totalSeat = totalSeat;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 15000;
    };
    Motorcycle.prototype.getMaxSpeed = function () {
        return this.maxSpeed;
    };
    Motorcycle.prototype.getTotalSeat = function () {
        return this.totalSeat;
    };
    return Motorcycle;
}(Vehicle));
//------------------------------------------------------------------------------------------------------------//
var hondaCivic = new Car('2022', '2021', 2022, false, false, 350, 5);
var toyotaCorrola = new Car('2018', '2020', 2019, false, false, 280, 5);
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
hondaCivic.offEngine();
console.log((hondaCivic.engineStatus()) ? 'The Engine is Started' : 'The Engine is Off');
hondaCivic.offEngine();
hondaCivic.rent();
console.log('Honda Civic After Rented: ', hondaCivic.getRented());
hondaCivic.return();
console.log('Honda Civic After Return: ', hondaCivic.getRented());
hondaCivic.setRented(true);
console.log('Set Honda Civic as Rent: ', hondaCivic.getRented());
console.log('\n');
//------------------------------------------------------------------------------------------------------------//
var mercedesTruck = new Truck('2011', '2010', 2012, false, false, 400, 30);
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
var kawasakiNinja360 = new Motorcycle('2006', '2012', 2007, false, false, 650, 2);
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
