// 2. Gettesr, Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstname = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // this._age =  value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'jobs', 20);
console.log(user1.age);

// 3. Field(public, private)

class Experiment {
    publicField = 2;
    #privateField = 4;
}

const experiment = new Experiment();
console.log("publicField=" + experiment.publicField);
console.log("privateField=" + experiment.privateField);

// 4. static properties and method

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(" 4 : " + article1.publisher);
console.log(" 5 : " + Article.publisher);
Article.printPublisher();

// 5. Interface
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.clor = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of `)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log(`triangle`);
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.colr}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
console.log(triangle.toString());

// https://developer.mozilla.org/ko/docs/Web/JavaScript