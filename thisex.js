const cat = {
    name : "LYN",
    age: 8,
    whatName(){
        return this.name
    },
}

console.log(cat.whatName())
// Output: LYN
cat.name = "WANG"
console.log(cat.whatName())