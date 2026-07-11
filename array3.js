//for given array find average
let marks=[30,40,50,60];
let sum=0;
for (let value of marks){
    sum+=value
}
let avg= sum/marks.length;
console.log("avg marks",avg);