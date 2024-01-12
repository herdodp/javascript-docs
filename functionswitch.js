// function
console.log("function");

const angka1 = 20;
const angka2 = 20;

//function tanpa parameter
function penjumlahan(){
    return angka1 + angka2;
}
console.log(penjumlahan())

//function print text
function name(){
    console.log("lorem ipsum dolor");
}
name();


// function dengan parameter
function jumlah(number1, number2){
    return number1 + number2;
}
console.log(jumlah(10,10))

console.log("------------------------");

console.log("switch");


//switch
let nilai = 70;

switch(nilai){
    case 50 :
        console.log("tidak lulus");
        break;
    case 60 :
        console.log("lulus, kurang baik");
        break;
    case 70 :
        console.log("lulus, baik");
        break;
    case 80 :
        console.log("lulus, baik sekali");
        break;
    case 90 :
        console.log("lulus, hampir sempurna");
        break;
    case 100 :
        console.log("lulus, sempurna");
        break;
}
