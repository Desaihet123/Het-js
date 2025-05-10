let myarr = [1,2,3,4,5,6,7,8,9]

const newarr = myarr.filter((num)=>{return num>5})
console.log(newarr);

const books = [
    {titel : "book one",genre : "fiction",publish : 1981,edition : 2004},
    {titel : "book two",genre : "non fiction",publish : 1995,edition : 2002},
    {titel : "book three",genre : "fiction",publish : 1951,edition : 2003},
    {titel : "book four",genre : "history",publish : 1989,edition : 2006},
    {titel : "book five",genre : "non fiction",publish : 1986,edition : 2000}

]

// books.filter((key)=>{console.log(key && key.titel);
// })

const limitedbook = books.filter((key)=>{return key.edition > 2003})

limitedbook.forEach((manybook)=>{console.log(manybook.titel);
})
