const myDate = new Date();

// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// const myCreatedDate = new Date(2024, 1, 21)
// const myCreatedDate = new Date(2024, 1, 21)
// const myCreatedDate = new Date("2023-02-21")
const myCreatedDate = new Date("02-12-2024")
// console.log(myCreatedDate.toLocaleString());

const myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate.getTime());

// console.log(Math.floor(Date.now()/1000));

const newDate = new Date()

// console.log(newDate);

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));