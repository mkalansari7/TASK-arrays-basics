let emptyArray = [];
let hobbies = [
    "Football", "coding", "reading", 
    "surfing", "basketball", "padel",
];
let numbers = [1,3,7,9,10,];
console.log(numbers[1]);
console.log(hobbies[5]);
hobbies.push("running");
console.log(hobbies[hobbies.length - 1]);
console.log(hobbies.length);
hobbies.splice(hobbies.length - 2 , 2);
console.log(hobbies.length);
console.log(hobbies);
hobbies.length = 0;
console.log(hobbies);

