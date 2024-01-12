//for

// for(init, condition, post){
    // statement
//}
console.log("for 1");

let angka = 1;

// cara 1
for(;angka <=10 ;){
    console.log("angka ke " + angka);
    angka++;
}

console.log("----------------------");
console.log("for 2");

//cara 2
for(let angka2 = 1; angka2 <= 10; angka2++){
    console.log("angka ke " + angka2);
}

console.log("----------------------");
console.log("while");

//while
let count = 0;
while(count <= 10){
    console.log("count ke " + count);
    count++;
}

console.log("----------------------");
console.log("do while");

//do while
let number = 0;
do{
    console.log("angka ke " + number);
    number++;
}while(number <= 10);
