const student = {
    name: 'Kolim Uddin',
    age: 18,
    class: 'ten',
    marks: {
        math: 55,
        physics: 64,
        chemistry: 33,
    }
}

// const marks = student.marks;
// const math = student.marks.math

const chemistry = student['marks']['chemistry']
console.log(chemistry)