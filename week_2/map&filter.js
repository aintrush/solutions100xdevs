
arr = [1 , 2, 3, 4,5];
names = [ "rush", "pras"]

const ans = arr.filter((n)=>{
    if ( n % 2 == 0){
        return true;
    }
})
console.log(ans)

const a = arr.map((n) => {
    return(n*2);
})
console.log(a)

const b = names.filter((n)=>{
    if(n.startsWith("r")) // startsWith("") function takes an argument to check whether the given string starts with the character or not
        return 1
})
console.log(b)

// map fnction maps the all values present in the array to the function 
// array.map(function) :syntax

//filter value only return the values from array which satisfies the function
//array.filter(function) :syntax


//NOTE
// when function is declared following observaton is made

// using fucntion keyword, returning true in map & filter returns the input passed in the function
// using (n)=>{} , returning true does not returns "n"

//NOTE UPDATE
// always SAVE the file and run before concluding to a stupenduous note like the above one