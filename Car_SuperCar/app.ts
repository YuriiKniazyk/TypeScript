enum carColor{
    red='red',
    black='black',
    green='green',
    white='white'
}

class Car {
    public name: string;
    public year: number;
    public price: number;
    public color: carColor;
    public powerFull: number;

    constructor (name: string, year: number, price: number, color: carColor, powerFull: number){
         this.name= name;
         this.year= year;
         this.price= price; 
         this.color= color;
         this.powerFull= powerFull;
    }

    public info():void{
        console.log(this);
    }
}

let car1 = new Car('reno', 2015, 10000, carColor.red, 5);
car1.info();

class SuperCar extends Car{
    constructor (name: string, 
        year: number, 
        price: number, 
        color: carColor, 
        powerFull: number,
        private statenumber: number
        ){

        super(name,year,price,color,powerFull);
   }
   
    public info():void{
        console.log(this);
    }
}

let car2 = new SuperCar('reno', 2015, 10000, carColor.red, 5, 1111);
car2.info();

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

class Mahaz{
    constructor(public nameM: string){
        this.nameM= nameM;
    }

    public info():void{
        console.log(this);
    }
}

class Category extends Mahaz{
    constructor(nameM: string, public nameC: string){
        super(nameM);
        this.nameC= nameC;
    }
}

class Product extends Category{
    constructor(nameM: string, nameC: string, public nameP: string){
        super(nameM, nameC);
        this.nameP= nameP;
    }
}

let product = new Product('ATB', 'Moloko', 'Syr');
product.info();

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

class LittleKing {
    constructor(public name: string, public age: number, public shoes: number){
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
    

    searchZola(arr: Array<Zola>): Array<Zola>{
        var shoes: number = this.shoes;
        let filter = arr.filter(function(item){
            return item.shoesSize === shoes;
        });
        return filter;
    }
};

class Zola {
    constructor(public name: string, public age: number, public shoesSize: number){
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
};

let princes = [new Zola('Alina', 22, 39), new Zola('Ira', 25, 38),
               new Zola('Alya', 22, 39), new Zola('Masha', 25, 40),
               new Zola('Katya', 21, 37), new Zola('Olya', 22, 39),
               new Zola('Galya', 24, 41), new Zola('Nastya', 27, 40),
               new Zola('Vika', 22, 40), new Zola('Nadya', 20, 39)];

let prince = new LittleKing('Svyat', 25, 38);
console.log('Prince: ',prince);

let ZolaLucky = prince.searchZola(princes);
console.log('ZolaLucky: ',ZolaLucky);
