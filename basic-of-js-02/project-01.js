// Q-1

const myarr = [1,2,3,4,5,6,7,8,9,10]

console.log(myarr);

console.log("first element",myarr[0]);
console.log("last element",myarr[myarr.length-1]);

// Q-2

const newarr = [10,90,50,30]
console.log(newarr);

newarr.unshift(12)
console.log("add element in start",newarr);

newarr.push(21)
console.log("add element in last",newarr);

// Q-3

const rearr = [21,31,61,41,51]
console.log(rearr);

rearr.pop()
console.log("removed the last element",rearr)

// Q-4

const exarr = ["apple","banana","orange"]

console.log(exarr.includes("banana"));

// Q-5

const car ={
    brand : "xyz",
    model : "poxd21",
    year : 2025
}

console.log(car);

// Q-6

car.color = "red"
console.log(car);

// Q-7

const obj = {
    name : "john",
    age : 25
}

console.log(obj);

delete obj.age
console.log(obj);

