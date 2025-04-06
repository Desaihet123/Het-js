const myarr = [1,2,3,4,5,6]

const heroes = ["ironman", "captain", "thor","hulk"]

const myarr2 = new Array(9,8,7,6,5)
console.log(myarr2[1]);

myarr.push(7)
myarr.push(8)

myarr.unshift(0)

console.log(myarr.includes(0));
console.log(myarr.indexOf(0));

// console.log(myarr);

let newarr = myarr.join()
console.log(myarr);
console.log(newarr);
console.log(typeof newarr);


console.log("A", myarr);
const one = myarr.slice(0,4)
console.log(one);


console.log("B", myarr);
const two= myarr.splice(0,4)
console.log(two);


