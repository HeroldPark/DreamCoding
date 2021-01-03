
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join(':'));
}
 
  // Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split('|');
    console.log(result);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const arry2 = array.reverse();
    console.log('arry2 : ' + arry2);
    console.log('array : ' + array);
}

  // Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0, 2);
    // console.log(result);
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

  // Q5. find a student with the score 90
{
    // const result = students.find(function(student, index) {
    //     //console.log(student, index);
    //     return student.score === 90;
    // });
    // or
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    result.forEach((student, index) => console.log(student, index));
    // console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student);
    console.log(result);

    const result2 = students.map((student) => student.score);
    console.log(result2);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log('some : ' + result);

    const result2 = students.every((student) => student.score < 50);
    console.log('eveny : ' + result2);
}

// Q9. compute students' average score
{
    console.clear();
    // const result = students.reduce((prev, curr) => {
    //     console.log('-----------');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0);
    // or
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log('Q9 : ' + result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log("Q10 : " + result);
}

// Bonus! do Q11 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
        console.log('Q11 : ' + result);
}

//array-api.js
//Displaying array-api.js.