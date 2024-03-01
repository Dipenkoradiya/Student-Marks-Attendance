"use strict";
const studentsData = [
    {
        rollNo: 1,
        name: "Dipen",
        number: 123456,
        subjects: {
            hindi: 55,
            english: 60,
            maths: 40,
        },
    },
    {
        rollNo: 2,
        name: "samir",
        number: 123456,
        subjects: {
            hindi: 50,
            english: 20,
            gujarati: 100,
            maths: 40,
        },
    },
    {
        rollNo: 3,
        name: "kush",
        number: 123456,
        subjects: {
            hindi: 100,
            english: 30,
            maths: 40,
        },
    },
    {
        rollNo: 4,
        name: "sandeep",
        number: 123456,
        subjects: {
            hindi: 100,
            english: 50,
            maths: 60,
        },
    },
    {
        rollNo: 5,
        name: "nishant",
        number: 123456,
        subjects: {
            hindi: 70,
            english: 60,
            maths: 50,
            gujarati: 50,
        },
    },
    {
        rollNo: 6,
        name: "yash",
        number: 123456,
        subjects: {
            hindi: 70,
            english: 60,
            maths: 50,
            gujarati: 50,
        },
    },
];

let maxpercentage = 0;
let maxMarkstudent = "";
let minercentage = 100;
let minMarkstudent = "";
let percentage = [];
let subjectskeys = [];
let uniqueSubjects = [];
let hindiTop = [];

let studMarks = [];
let failStudent = [];
let passStudent = [];
let isFail = false;
let finalPassORFail = [];

const passOrFail = studentsData.map(checkFunction);
function checkFunction(data) {
    const marks = Object.values(data.subjects);
    const markCheck = marks.every((mark) => mark > 30);
    if (markCheck) {
        const total = Object.values(data.subjects).reduce((mark, tot) => tot + mark, 0);
        const totalMarks = Object.keys(data.subjects).length * 100;
        let per = Math.trunc((total * 100) / totalMarks);
        finalPassORFail.push({ name: data.name, percentage: per });
    }
}
console.log(finalPassORFail);

const evaluate = studentsData.map(checkFunction);
function checkFunction(data) {
    const marks = Object.values(data.subjects);
    marks.filter((mark) => mark <= 30).map((mark) => failStudent.push(data.name));
    marks.filter((mark) => mark > 30).map((mark) => passStudent.push(data.name));
}
const failStudents = new Set(failStudent);
const passStudents = new Set(passStudent);
let FinalPass = new Set([...passStudents].filter((x) => !failStudents.has(x)));

const failStudentsArray = Array.from(failStudents);
const passStudentsArray = Array.from(FinalPass);

console.log("----------Failed students-------------");
const printFail = failStudentsArray.map((data) => console.log(`${data} is Fail.`));
console.log("----------Pass students-------------");
const printPass = passStudentsArray.map((data) => console.log(`${data} is Pass.`));

const student = studentsData.map(myfunction);
function myfunction(data) {
    subjectskeys.push(Object.keys(data.subjects));

    const total = Object.values(data.subjects).reduce((mark, tot) => tot + mark, 0);
    const totalMarks = Object.keys(data.subjects).length * 100;
    let per = Math.trunc((total * 100) / totalMarks);

    if (per > maxpercentage) {
        maxpercentage = per;
        maxMarkstudent = data.name;
    }
    if (per < minercentage) {
        minercentage = per;
        minMarkstudent = data.name;
    }

    percentage.push({ per: per, name: data.name });
    return `Roll number:${data.rollNo} name:${data.name} has scored:${total} marks and ${per}%.`;
}

//Unique subjects-----------------
for (let i in subjectskeys) {
    for (let j in subjectskeys[i]) {
        uniqueSubjects.push(subjectskeys[i][j]);
    }
}
const uniqueSubjectSet = new Set(uniqueSubjects);
const uniqueSubjectsArray = Array.from(uniqueSubjectSet);
//-----------------------------------------

for (let i in studentsData) {
    hindiTop.push({ marks: studentsData[i].subjects.hindi, name: studentsData[i].name });
}
//Sorted hindi marks--------
let hindisorted = hindiTop.sort((a, b) => b.marks - a.marks);

console.log("----------Minimum and maximum---------------");
console.log(`Maximum percentage is scored by ${maxMarkstudent} ${maxpercentage}%.`);
console.log(`Minimum percentage is scored by ${minMarkstudent} ${minercentage}%.`);

console.log("----------students data---------------");
const students = student.map((data) => console.log(data));

console.log("-------------Ascending order------------");
let ascsorted = percentage.sort((a, b) => a.per - b.per);
ascsorted.map((data) => console.log(`${data.name} has scored ${data.per}%.`));

console.log("-------------Descending order-----------");
let dessorted = percentage.sort((a, b) => b.per - a.per);
dessorted.map((data) => console.log(`${data.name} has scored ${data.per}%.`));

console.log("------------last 3 hindi students-----------");
//Printed last 3 students who scored least marks of 3 students
hindisorted.slice(-3).map((data) => console.log(`${data.name} has scored ${data.marks}.`));

console.log("------------top 3 hindi students-----------");
//Printed first 3 students who scored least marks of 3 students
hindisorted.slice(0, 3).map((data) => console.log(`${data.name} has scored ${data.marks}.`));

let attend = [];
const studentAttendance = [
    {
        name: "Dipen",
        attendance: [1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
    },
    {
        name: "Khushil",
        attendance: [1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    },
    {
        name: "Samir",
        attendance: [1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    },
    {
        name: "Sandeep",
        attendance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
        name: "Dishant",
        attendance: [1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
    },
];
let minAttendance = 10;
let minAttendanceStudent = "";
let maxAttendance = 0;
let maxAttendanceName = "";
let attendanceArray = [];

let minAbsent = 10;
let minAbsentName = "";
let maxAbsent = 0;
let maxAbsentName = "";

const atten = studentAttendance.map((data) => console.log(`${data.name}'s attendance is ${data.attendance}.`));
const totAttendance = studentAttendance.map(calculate);
function calculate(data) {
    const totalAttendance = data.attendance.reduce((total, cur) => total + cur, 0);
    const absent = data.attendance.length - totalAttendance;
    if (minAttendance > totalAttendance) {
        minAttendance = totalAttendance;
        minAttendanceStudent = data.name;
    }
    if (maxAttendance < totalAttendance) {
        maxAttendance = totalAttendance;
        maxAttendanceName = data.name;
    }
    if (minAbsent > absent) {
        minAbsent = absent;
        minAbsentName = data.name;
    }
    if (maxAbsent < absent) {
        maxAbsent = absent;
        maxAbsentName = data.name;
    }
    attendanceArray.push({ name: data.name, present: totalAttendance, absent: absent });
}
console.log(attendanceArray);
let attendanceObject = {
    highest: {},
    lowest: {},
};
attendanceObject.highest.highestAttendance = {
    attendance: maxAttendance,
    name: maxAttendanceName,
};
attendanceObject.highest.highestAbsentee = {
    absentee: maxAbsent,
    name: maxAbsentName,
};
attendanceObject.lowest.lowestAttendance = {
    attendance: minAttendance,
    name: minAttendanceStudent,
};
attendanceObject.lowest.lowestAbsentee = {
    attendance: minAbsent,
    name: minAbsentName,
};

console.log(attendanceObject);

// console.log(ObjectPush);
console.log(`Lowest attendance is of ${minAttendanceStudent}: ${minAttendance}.`);
console.log(`Highest attendance is of ${maxAttendanceName} ${maxAttendance}.`);
console.log(`Minimum absentee is of ${minAbsentName}: ${minAbsent}.`);
console.log(`Max absentee is of ${maxAbsentName}: ${maxAbsent}.`);
