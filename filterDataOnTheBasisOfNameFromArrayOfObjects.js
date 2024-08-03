let obj = [
    {
        name: "Rahul",
        age: 25,
        profession: "Job Seeker"
    },
    {
        name: "Rahul",
        age: 25,
    },
    {
        name: "Rahul Kumar",
        age: 26,
        profession: "Software Engineer"
    },
    {
        name: "Raj"
    },
    {
        name: "Raju"
    },
    {
        name: "Rahul Kumar"
    }
];

// Use an object to keep track of encountered names
const seenNames = {};
const uniqueObjects = [];

for (const item of obj) {
    if (!seenNames[item.name]) {
        // If the name hasn't been encountered yet, add it to the result array
        seenNames[item.name] = true;
        uniqueObjects.push(item);
    }
}

console.log(uniqueObjects);
