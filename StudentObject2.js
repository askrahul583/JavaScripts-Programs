let students = [
  {
    name: "Abhishek Sharma",
    subjects: [
      {
        maths: 45,
        hindi: 50,
        science: 60,
        english: 90,
        social_science: 78,
      },
    ],
  },
  {
    name: "Rahul Kashyup",
    subjects: [
      {
        maths: 76,
        hindi: 70,
        science: 80,
        english: 89,
        social_science: 87,
      },
    ],
  },
  {
    name: "Raushan Bhagat",
    subjects: [
      {
        maths: 54,
        hindi: 70,
        science: 60,
        english: 49,
        social_science: 78,
      },
    ],
  },
  {
    name: "Rajesh Kumar",
    subjects: [
      {
        maths: 45,
        hindi: 60,
        science: 50,
        english: 59,
        social_science: 38,
      },
    ],
  },
  {
    name: "Rahul Kumar",
    subjects: [
      {
        maths: 95,
        hindi: 73,
        science: 92,
        english: 84,
        social_science: 88,
      },
    ],
  },
];

let results = {};
students.forEach((student) => {
  student.subjects.forEach((subject) => {
    let totalMarks = 0;
    for (let subjectName in subject) {
      totalMarks += subject[subjectName];
      results[student.name] = totalMarks;
    }
  });
});

console.log(results);
