for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {
        console.log("5 is best number");
        continue 
        
    }
    console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`the tabel of ${i}`);
    
    for (let j = 1; j <= 10; j++) {

        // console.log(`${i}*${j}=${i*j}`);
             
    }    
}

let heros = ["loki","thor","flash"]

for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    console.log(`hero is ${element}`);
    
}


for (let index = 0; index < 20; index++) {
    const element = index;
    if (index==5) {
        console.log("5 is best");
        // break
        continue
        
    }
    console.log(`the num is ${element}`);
    
}