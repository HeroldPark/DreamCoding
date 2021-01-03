// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

console.clear();
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);

// 2. JSON to Object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();

// rabbit을 JSON으로 변환할때 함수는 포함되지 않는다.
//  그러므로 역변환할떄 없으므로 이렇게 된다.
// obj.jump();

// JSO Diff 
// JSON Beautifier
// JSON Parser
// JSON Validator