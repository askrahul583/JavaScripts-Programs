let students = [
  {
    name: "Abhi",
    subjects: [
      {
        maths: 78,
        english: 89,
      },
    ],
  },
  {
    name: "Abhishek",
    subjects: [
      {
        maths: 64,
        english: 99,
      },
    ],
  },
  {
    name: "Ram",
    subjects: [
      {
        maths: 88,
        english: 89,
      },
    ],
  },
];

let TotalMarks = [];

students.forEach((student) => {
  let totalMarks = 0;
  let totalSubjects = student.subjects.length;
  console.log(totalSubjects);
  student.subjects.forEach((subject) => {
    for (let [sub, marks] of Object.entries(subject)) {
      totalMarks += marks;
    }
    let avgMarks = totalMarks / Object.keys(student.subjects).length;
    TotalMarks.push({ Name: student.name, totalMarks, avgMarks });
  });
});

console.log(TotalMarks);

let highestScorer = null;
let highestMarks = -1;

TotalMarks.forEach((student) => {
  if (student.totalMarks > highestMarks) {
    highestScorer = student;
    highestMarks = student.totalMarks;
  }
});

console.log(
  `The highest scorer is ${highestScorer.Name} with ${highestScorer.totalMarks} marks.`
);


