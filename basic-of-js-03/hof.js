function sum(num1,num2,cb){
    let result  = num1+num2
    console.log(result)
    cb(result)
}

sum(20,20,()=>{})

function showResult(result){
    console.log(result)
}

sum(2,4,showResult)   // here we give funcation as argument 

sum(10,20,result => console.log(`result is ${result}`)) // here we put arrow funcation as argument

function multiply(x) {
    return function(y) {
        return x*y
    }
    
}
const triple = multiply(3)
console.log(triple(5));