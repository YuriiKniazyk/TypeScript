var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var carColor;
(function (carColor) {
    carColor["red"] = "red";
    carColor["black"] = "black";
    carColor["green"] = "green";
    carColor["white"] = "white";
})(carColor || (carColor = {}));
var Car = /** @class */ (function () {
    function Car(name, year, price, color, powerFull) {
        this.name = name;
        this.year = year;
        this.price = price;
        this.color = color;
        this.powerFull = powerFull;
    }
    Car.prototype.info = function () {
        console.log(this);
    };
    return Car;
}());
var car1 = new Car('reno', 2015, 10000, carColor.red, 5);
car1.info();
var SuperCar = /** @class */ (function (_super) {
    __extends(SuperCar, _super);
    function SuperCar(name, year, price, color, powerFull, statenumber) {
        var _this = _super.call(this, name, year, price, color, powerFull) || this;
        _this.statenumber = statenumber;
        return _this;
    }
    SuperCar.prototype.info = function () {
        console.log(this);
    };
    return SuperCar;
}(Car));
var car2 = new SuperCar('reno', 2015, 10000, carColor.red, 5, 1111);
car2.info();
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
var Mahaz = /** @class */ (function () {
    function Mahaz(nameM) {
        this.nameM = nameM;
        this.nameM = nameM;
    }
    Mahaz.prototype.info = function () {
        console.log(this);
    };
    return Mahaz;
}());
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(nameM, nameC) {
        var _this = _super.call(this, nameM) || this;
        _this.nameC = nameC;
        _this.nameC = nameC;
        return _this;
    }
    return Category;
}(Mahaz));
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(nameM, nameC, nameP) {
        var _this = _super.call(this, nameM, nameC) || this;
        _this.nameP = nameP;
        _this.nameP = nameP;
        return _this;
    }
    return Product;
}(Category));
var product = new Product('ATB', 'Moloko', 'Syr');
product.info();
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
var LittleKing = /** @class */ (function () {
    function LittleKing(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
    LittleKing.prototype.searchZola = function (arr) {
        var shoes = this.shoes;
        var filter = arr.filter(function (item) {
            return item.shoesSize === shoes;
        });
        return filter;
    };
    return LittleKing;
}());
;
var Zola = /** @class */ (function () {
    function Zola(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
    return Zola;
}());
;
var princes = [new Zola('Alina', 22, 39), new Zola('Ira', 25, 38),
    new Zola('Alya', 22, 39), new Zola('Masha', 25, 40),
    new Zola('Katya', 21, 37), new Zola('Olya', 22, 39),
    new Zola('Galya', 24, 41), new Zola('Nastya', 27, 40),
    new Zola('Vika', 22, 40), new Zola('Nadya', 20, 39)];
var prince = new LittleKing('Svyat', 25, 38);
console.log('Prince: ', prince);
var ZolaLucky = prince.searchZola(princes);
console.log('ZolaLucky: ', ZolaLucky);
