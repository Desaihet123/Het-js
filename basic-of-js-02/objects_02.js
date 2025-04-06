const user = new Object();

user.id= "987"
user.name = "xyz"
user.isloggedin= false
console.log(user);

const customer ={
   email: "xyz@gmail.com",
   fullname: {
       userfullname:{
           firstname:"het",
           lastname:"desai"
       }
   }
}


console.log(customer.fullname)
console.log(customer.fullname.userfullname)
console.log(customer.fullname.userfullname.lastname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//  will create nested obj
const obj4={obj1,obj2,obj3}   
console.log(obj4);

//  give expected outcome
const obj5= Object.assign({}, obj1,obj2,obj3)
console.log(obj5);

//  spread operator
const obj6 = {...obj1,...obj2,...obj3}
console.log(obj6);


const users = [
   {
       id: 1,
       email: "het21@gmail.com"
   },
   {
       id: 2,
       email: "ansh54@gmail.com"
   },
   {
       id: 3,
       email: "krish4@gmail.com"
   },
   {
       id: 4,
       email: "@gmail.com"
   }
]


console.log(users[1].email);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("loggedin"));



