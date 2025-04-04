let date = new Date()


console.log(date);
console.log(date.toString());
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(typeof date)  


let myDate = new Date(2025, 0 ,1)
console.log(myDate.toString())

let myDate2 = new Date(2025,0,23)
console.log(myDate2.toLocaleDateString())


let timeStamp= Date.now()
console.log(timeStamp);

console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));


let myDate3 = new Date()
console.log(myDate3);
console.log(myDate3.getMonth() +1);
console.log(myDate3.getDay());


