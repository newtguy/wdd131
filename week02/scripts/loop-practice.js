const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44]

//for
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(i);
    }
}

//while
let j = 0;
while (j < studentReport.length) {
    if (studentReport[j] < LIMIT) {
        console.log(studentReport[j]);
    }
    j++;
}

// for... in
for (let k in studentReport) {
    if (studentReport[k] < LIMIT) {
        console.log(studentReport[k]);
    }
}

//forEach
studentReport.forEach(item => console.log(item));

//forEach & function call
studentReport.forEach(studentReporter);
function studentReporter(item, index, array) {
    if (item < LIMIT) {
        console.log(item);
    }
}

// List days after today 
// next n days
for (let i = 1; i <= n; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    item = document.createElement("li"); // list item
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}
