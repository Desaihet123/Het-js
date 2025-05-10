const map = new Map()
map.set('IN' , "india")
map.set("USA", "united states of america")
map.set("IN","india")

console.log(map);

for (const [key, value] of map) {
    console.log(key,":-",value);
        
}

const myobj = {
    name : "het",
    age : 20,
    number : 9898
}

// for (const detail of myobj) {
//     console.log(detail);
// }