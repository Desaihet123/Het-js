const pro1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("task is complete");
        resolve();
    }, 1000);
});

pro1.then(function() {
    console.log("promise consumed");
});

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("task 2 complete");
        resolve();
    }, 1000);
}).then(function() {
    console.log("promise consumed");
});

const promisethree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "het", email: "dau@mail" });
    }, 1000);
});

promisethree.then(function(user) {
    console.log(user);
});

const pro4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({ username: "het", email: "dau@mail" })
        }else{
            reject("error : 404")
            
        }
    } , 1000)
})

pro4
.then((user) => {
    console.log(user); 
    return user.username 
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log("error");
    
}).finally(() => {
    console.log("the promise is either resolve or rejected");
    
})

const pro5 = new Promise(function(resolve,reject){
   setTimeout(function(){
        let error = true
        if (!error) {
            resolve({ username: "het", email: "dau@mail" })
        }else{
            reject("error : 404")
            
        }
    } , 1000)
})

async function consumepro5() {
   try {
     const response = await pro5
    // const data = response.json
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
    
}

consumepro5()

async function users() {
   try {
     const response = await fetch("https://api.github.com/users/Desaihet123")
     const data = await response.json()
     console.log(data.following);
     
   } catch (error) {
    console.log("error");
    
    
   }
}
users()

