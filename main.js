/// M23W0388 Ankumbura Kavindu Hasith

const students=[
    {name:"Ann",marks:62},
    {name:"Sam",marks:24},
    {name:"Kane",marks:88},
    {name:"Bob",marks:43},
    {name:"Hasi",marks:71},
    {name:"Kavi",marks:30},
    {name:"Peter",marks:95},
    {name:"Jay",marks:57},
];

students.sort((a,b)=>b.marks-a.marks);

for (const student of students){
if (student.marks>45){
    console.log(`${student.name} is passed, marks : ${student.marks}`);
}
else{
    console.log(`${student.name} is failed, marks : ${student.marks}`);
}
}










