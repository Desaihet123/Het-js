
let mysym = Symbol()
let user = {
    name:"het",
    surname :"desai",
    age:20,
    [mysym] : Symbol("key1"),
    
    email: "xyz@gmail.com",
    isloggedin: true,
    lastlogin: ["mon","wed"]
}

// console.log(user.email);
console.log(user["email"]);

console.log(user["surname"]);

console.log(user[mysym]);
console.log(typeof mysym);


console.log(user.age);

// Object.freeze(user)



// console.log(user.age);


user.greeting = function(){
    console.log("hello user");
    
}


console.log(user.greeting());


user.greeting2 =function(){
    console.log(`hello user, ${this.name}`);
    
}
user.greeting2()
