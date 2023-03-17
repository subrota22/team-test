
function reverseString(string) {
try {
string = string.split("").reverse().join("");
} catch (error) {
   console.log(error.message); 
}finally{
console.log(string);
}
}

reverseString("friend is the best") ;
