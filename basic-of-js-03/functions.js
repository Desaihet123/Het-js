function het() {
    console.log('d');
    console.log("e");
    console.log("s");
    console.log("a");
    console.log("i");
}

// het()

// function addnum(num1,num2) {
//     console.log(num1+num2);
    
// }
 
function addnum(num1,num2) {
//    let result = num1+num2
//    return result
      return num1+num2
    
}

const result = addnum(3,5)
// console.log(result);

function loginuser (username){
    if(!username){
        console.log("please enter name");
        return
        
    }
    return `${username} just logged in`
}


// console.log(loginuser());

function calculatecartprice (...num1){
    return num1
}

// console.log(calculatecartprice(200,400,600));

const user = {
    uname : "xyz",
    price : 200
}

function handleobject(anyobject){
    console.log(`user name is ${anyobject.uname} and price is ${anyobject.price}`);
}

// handleobject(user)

const arr = [200,300,500]

function handlearr(anyarr){
    console.log(`first element is ${anyarr[0]}`);
    
}

// handlearr(arr)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++arrow++++++++++++++++++++++++++++++++++++++++++++++++++



const userObj = {
    name : " joy ",
    age : 19,
    
    text : function(){
        console.log(`hello my name is ${this.name} my age is ${this.age}`)
        console.log(this)  // here this keyword give current context of object
    }
}

userObj.text()
userObj.name = "het"
userObj.age = 20
userObj.text()

// console.log(this)

function tempFun(){
    let name = "xyz"
    // console.log(this)
    console.log(this.name)  // we can't use this keyword in funcation it only used in object
}

tempFun()

const arrow = () => {
    let name = "magan"
    console.log(this)
}

const sum = (num1 , num2) => num1+num2
console.log(sum(10,20))

const obj = (name)=>({name:"mj"})  // here we return object in arrow funcation
console.log(obj())