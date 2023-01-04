// WRITE YOUR CODE HERE

let studentname = ["josh","bella","jim","matea"];

console.log(studentname.length);

for (let i=0;i<studentname.length;i++) {
    console.log("Welcome to the class",studentname[i]);
}

studentname[0] = "noa";

if (studentname[0]==="noa") {
    console.log(studentname[0],"is in class");
} else {
    console.log(studentname[0],"is not in class");
}

console.log("Welcome to the class",studentname[studentname.length-1]);