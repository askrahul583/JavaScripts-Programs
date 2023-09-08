let students = [
  {
    name: "Abhishek",
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
    name: "Raushan",
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
    name: "Rajesh",
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

// Problem 1 Get the Highest Score in Individual Subjects

let highestIndividualScores = {};

students.forEach((student) => {
  student.subjects.forEach((subject) => {
    // console.log(subject);
    for (let [subjectName, marks] of Object.entries(subject)) {
      if (
        !highestIndividualScores[subjectName] ||
        marks > highestIndividualScores[subjectName].marks
      ) {
        highestIndividualScores[subjectName] = {
          marks,
          studentName: student.name,
        };
      }
    }
  });
});

console.log(highestIndividualScores);
