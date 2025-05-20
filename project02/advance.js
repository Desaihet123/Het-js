//###################q-1###########

let arr1=[10,30,50]
let arr2=[54,95,62]

let arr3=[]
   
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    arr3.push(element)
}

for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    arr3.push(element)
}
console.log(arr3);

//############q-2############


// let str1 = "hetdesai"
// strInlowecase = str1.toLowerCase()

// for (let i = 0; i < strInlowecase.length; i++) {
//     let char = strInlowecase[i]

//     if (strInlowecase.indexOf(char) != i) {
//         console.log(`First repeating character is ${char} in ${str1}`)
//         return
//     }
// }
// console.log(`No repeating characters found in "${str1}"`)


//############q-3################

let sentence1 = "i am het i am thor"
let str = sentence1.split(" ")
let counter = {}

for (let i = 0; i < str.length; i++) {
    let word = str[i]


    if (counter[word]) {
        counter[word] = counter[word] + 1 

    }
    else {
        counter[word] = 1
    }
}
console.log(counter)

//###############Q-4###############


let array1 = [1,2,3,4,5]
let array2 = [5,6,7,8,9,4]
let result = []

for (let i = 0; i < array1.length; i++) {
    
    for (let j = 0; j < array2.length; j++) {
        
        if (array1[i] == array2[j]) {
            result.push(array1[i])
        }

    }
    
}
console.log(`comman element in both array is ${result}`)


//##########q-5##################


let arr = [0,1,2,0,4,5]
let result1 = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        result1.push(arr[i])
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        result1.push(arr[i])
    }
}

console.log(result1)

//###########q-6##########

let sentence2 = "i am desai het"
let charCount = sentence2.length

for (let i = 0; i < sentence2.length; i++) {
    
    if (sentence2[i] == " ") {
        charCount--
    }
    
}

console.log(charCount)


//###################q-8###########

const sentence3= "this is a giraffeeee writingg a code "
let currentWord=""
let longestWord=""
for(let i=0; i<sentence3.length;i++){
    let char= sentence3[i]

    if(char != " "&& char!= undefined){
        currentWord+= char
    }
    else{
        if(currentWord.length> longestWord.length){
            longestWord = currentWord
        }
        currentWord=""
    }
    
}
console.log("longest word is : ", longestWord);

// #########q-9########

let star = ""

for (let i = 1; i <= 4; i++) {

    for (let j = 1; j <= i; j++) {
        
        process.stdout.write(`*`)        

    }

    process.stdout.write(`\n`) 
}

// ##########q-10#############

let exarr= [1,8,3,9,5]
let ascending=true
let descending=true

for(let i=0;i<exarr.length;i++){
    if(exarr[i]>exarr[i+1]){
        ascending=false
    }else if(exarr[i]<exarr[i+1]){
        descending=false
    }
}
if(ascending){
    console.log("arr is in ascending order");
    
}else if(descending){
    console.log("descending");
    
}else{
    console.log("unsorted");
    
}