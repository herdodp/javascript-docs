// getter and setter
class Mobil {
  #kecepatan = null;

  constructor(warna, tipe, merk){
    this.warna = warna;
    this.tipe = tipe;
    this.merk = merk;
    this.#kecepatan = 1200; //private properti ditandai dengan #
  }


  get kecepatanMobil(){
    return this.#kecepatan;
  }

  set kecepatanMobil(kecepatanMobil){
    console.log(`tidak dapat mengubah kecepatan dasar mobil sebesar ${this.#kecepatan}`);
  }

  maju(){
    console.log("mobil bergerak maju");
  }





}

// membuat object baru
const mobil1 = new Mobil("merah", "truk", "toyota");
console.table(mobil1);

// mengubah warna merah menjadi putih
mobil1.warna = "putih";
console.table(mobil1);

// mengubah nilai kecepatan mobil
mobil1.kecepatanMobil = 1000; // tidak dapat mengubah value #kecepatan
console.table(mobil1);
