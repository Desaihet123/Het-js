// ############  Q-1 ########## 

function evenorodd(number) {
    if (number%2==0) {
        console.log("even");
        
    } else {
        console.log("odd");
        
    }
    return number
}

evenorodd(21)


// ############### Q-2 ##############

const a=26, b=58, c=75


const max  = Math.max(a,b,c)
console.log(max);

// ############### Q-3 ##############


function reverseNumber(num) {
    return Number(String(num).split('').reverse().join(''));
}

console.log(reverseNumber(12345)); 


// ############### Q-4 ##############


function isPalindrome(input) {
    let str = input.toString();
    
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome(121)); 
console.log(isPalindrome("heteh")); 
console.log(isPalindrome(123)); 
console.log(isPalindrome("hello")); 



// ############### Q-5 ##############



 const num=21

    if (num<=1)
        console.log("not prime");
        

    for(i=2; i<= Math.sqrt(num); i++){
        if (num%i===0) {
            console.log("not prime");
            
        }
        else{
            console.log("prime");
            
        }
    }

    

    // ############### Q-6 ##############

    let varr = 3
let result =1

for(let i=1;i<=varr;i++){
    result= result *i
}

console.log("factorial of varr is: " , result);


    // ############### Q-7 ##############

function fibonacciSeries(n) {
    let series = [0, 1];

    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    
    return series.slice(0, n);
}


console.log(fibonacciSeries(5));  
console.log(fibonacciSeries(10)); 
console.log(fibonacciSeries(1));


// ################### Q-8 ###########


function sumOfDigits(num) {
    return num.toString()
              .split('')
              .map(Number)
              .reduce((sum, digit) => sum + digit, 0);
}

console.log(sumOfDigits(123));  
console.log(sumOfDigits(9876)); 
console.log(sumOfDigits(5));    
