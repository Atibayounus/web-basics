//changing element of array
const Animals=["cat","dog","donkey","lizard"];
Animals[1]="cow";
console.log(Animals);

//length of array

const cities = ["Lahore", "Karachi", "Islamabad"];

console.log(cities.length);

// Given an array of numbers, e.g. [4, 8, 15, 16, 23, 42], write code that returns a NEW array containing only the even numbers, doubled.
const numbers = [4, 8, 15, 16, 23, 42];
const result = [];
for(let i=0 ; i<numbers.length ; i++){
if(numbers[i]%2 === 0){
    result.push(numbers[i]*2);
}
}
console.log(result);
