const uemail = "het56@gamil.com"

if (uemail){
    console.log("get email id");
}else{
    console.log("don't get email");
}

if(uemail.length===0){
    console.log("don't get email");
}else{
    console.log("get email id");
    
}

const emptyobj = {}

if((Object.keys(emptyobj)).length === 0){
    console.log("don't get email");    
}

console.log(false == 0);
console.log(false == "");
console.log(0 == "");

