const marvel= ["ironman", "captain", "thor","hulk"]
const DC = ["superman", "batman","flash"]


// marvel.push(DC)
// console.log(marvel);
// console.log(marvel[3]);

const all = [...marvel,...DC]
console.log(all);

const allheroes = marvel.concat(DC)
console.log(allheroes);


const another= [1,2,3,[4,5,6],7,[8,9,[4,5]]]
const newanother = another.flat(Infinity)
console.log(newanother);


console.log(Array.isArray("desai"));
console.log(Array.from("desai"));
console.log(Array.from({name:"desai"}));

let score1 =100
let score2 =200
let score3 =300
let score4 = null

console.log(Array.of(score1,score2,score3,score4));

