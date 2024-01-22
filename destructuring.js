// destructuring array
const angka = [1,2,3,4,5];

const [a,b,c,d,e] = angka;

console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
//console.log(e);



// destructuring object and nested property
const nama = {
  namaDepan : "herdo",
  namaTengah : "dimas",
  namaBelakang : "pratirto",
  nickname : {
    garena : {
      freefire : "herdo22",
      pointblank : "herdo33"
    },
    megaxus : {
      rF_online : "herdo44",
      ayodance : "herdo55"
    }
  }
}

const {namaDepan, namaTengah, namaBelakang, nickname:{garena:{freefire, pointblank}, megaxus:{rF_online, ayodance}}} = nama;

console.log(namaDepan);
//console.log(namaTengah);
//console.log(namaBelakang);
console.log(freefire);
console.log(rF_online);


// destructuring in function
function tipeMobil({mobil1, mobil2, mobil3}){
  const tipe = [mobil1, mobil2, mobil3];

  for(x of tipe){
    console.log(x);
  }
}

const mobil =  {
    mobil1 : "toyota",
    mobil2 : "suzuki",
    mobil3 : "honda"
}

tipeMobil(mobil);
