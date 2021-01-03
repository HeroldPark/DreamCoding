// Object 
// 1. Literal, constructor
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}

const person = { name : 'ellie', age : 4};
print2(person);
function print2(person) {
    console.log(person.name);
    console.log(person.age);
}

const obj1 = {};    // literal
const obj2 = new Object();  // constructor

// 나중에 추가도 가능
person.hasJob = true;
console.log(`Job : ${person.hasJob}`);

// 삭제도 가능
delete person.hasJob;
console.log('Job2 : '+ person.hasJob );

// Object = {key : value};
// 2. Computed properties
console.log(person.name);
console.log('Name2 : ' + person['name']);
person['hasJob'] = true;
console.log(person.hasJob);

// key가 정해지지 않았을때 사용.
// 동적으로 key를 받아와야 할때 사용.
function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);
}
printValue(person, 'name');
printValue(person, 'age');

// 3. Property value shorthand
const person1 = { name : 'ellie', age : 4};
const person2 = { name : 'steve', age : 5};
const person3 = { name : 'dave', age : 7};

const person4 = makePerson('herold', 10);
function makePerson(name, age) {
    return {
        name,
        age
    };
}
console.log(person4);

// 4. Constructor Function
const person5 = new Person('park', 12);
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this
}
console.log(person5);

// 5. in operator : property existence chaekc)key in obj
console.log('name' in person);
console.log('age' in person);
console.log('key' in person);

// 6. for..in vs for..of
// for(key in obj)
console.clear();
for(key in person) {
    console.log('Key : ' + key);
}

// for (value of iterable)
const array = [1, 2, 3, 5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.aggign(dest, [obj1, obj2, obj3,...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// olf way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// 복사 하는 방법
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// or
const user5 = Object.assign({}, user);
console.log(user5);


// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.clear();
console.log(mixed.color);
console.log(mixed.size);