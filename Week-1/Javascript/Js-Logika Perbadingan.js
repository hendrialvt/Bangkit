let myScore = 100;
let computerScore = 90;
 
if(myScore > computerScore){
    console.log("Selamat, Anda menang");
}
else{
    console.log("Anda kalah");
}

const score = 83;
 
if (score > 89) {
    console.log('Anda mendapatkan peringkat A');
} else if (score > 79) {
    console.log('Anda mendapatkan peringkat B');
} else if (score > 69) {
    console.log('Anda mendapatkan peringkat C');
} else {
    console.log('Anda mendapatkan peringkat D');
}

const aString = '10';
const aNumber = 10
 
console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
 
/* output
true
false
*/