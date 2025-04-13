const balance = 499999

if(balance < 5000000) console.log(`your balance is lees then 5000000`);  // it is call impliseet scope but it is not used in company

else{
    console.log(`your balance is grater then 5000000`)
}

const subMarks = 65

if(subMarks > 92){
    console.log("first class")
}
else if(subMarks > 80){
    console.log("second class")
}
else if(subMarks > 60){
    console.log("third class")
}
else{
    console.log("fail")
}

const age = 20
const drivingLicence = false

if (age > 18 && drivingLicence === true) {
    console.log("You can drive")
}
else if (age < 18 && drivingLicence === false) {
    console.log("You can't drive")
}
else if (age < 18 || drivingLicence === true) {
    console.log("Your age is low")
}
else if (age > 18 || drivingLicence === false) {
    console.log("You don't have a licence")
}