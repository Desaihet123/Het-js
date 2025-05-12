// ################## Q-1 ##################
let name = "het"
let reversed = ""

for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i]
}

console.log(reversed)

// ################## Q-2 ##################


let string = "hi i am het"
let countOfVowels = 0
let countOfConsonants = 0

for (let i = 0; i < string.length; i++) {
    let vowels = string[i].toLowerCase()
    if (vowels == 'a' || vowels == 'e' || vowels == 'i' || vowels == 'o' || vowels == 'u') {
        countOfVowels++
    }
    else{
        countOfConsonants++
    }
}

console.log(countOfVowels);
console.log(countOfConsonants);


//############### q-3 ###############

const num1 = 12
const num2 = 30

let smallNum = Math.min(num1 , num2)

for (let i = smallNum; i >= 1; i--) {
    if (num1%i == 0 && num2%i == 0) {
        console.log(i)
        break
    }
    
}

// ################## q-4 ############


const num01 = 45
const num02 = 30

let lcm = Math.max(num01,num02)

while (true) {
    if (lcm%num01 == 0 && lcm%num02 == 0) {
        break
    }   
    lcm++ 
}

console.log(lcm);

//#############q-5###############


const number = 153
let sum = 0
let temp = number

while (temp > 0) {
    let remainder = temp%10
    sum = sum + remainder**3
    temp = parseInt(temp/10)
}

if (number == sum) {
console.log(`${number} is armstrong number`);
}
else{
console.log(`${number} is not armstrong number`);
}


//##############Q-6############

let array = [2,6,1,4,3,5]
let sortedARR = []

while (array.length>0){
    let min = array[0]
    let minIndex = 0
    for(i=1; i<array.length; i++){
        if(array[i]<min){
            min= array[i]
            minIndex = i
        }
}
sortedARR.push(min)

array.splice(minIndex,1)
}

console.log(sortedARR);