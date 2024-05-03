//  Dates:

const myDate = new Date()

// console.log(typeof myDate); // Object
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());

// const myCreatedDate = new Date(2024, 0, 15)
// const myCreatedDate = new Date(2024, 0, 15, 5, 40)
const myCreatedDate = new Date("02-23-2024")

// console.log(myCreatedDate.toLocaleString());

const myTimeStamp = Date.now();

// console.log(typeof myTimeStamp); // Number
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

const newDate = new Date()

// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

const formatDate = newDate.toLocaleString('defaule', {
    weekday: "long"
})

console.log(formatDate);