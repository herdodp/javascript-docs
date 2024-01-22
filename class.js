//object oriented programmeing
class Mobil {

  constructor(warna, tipe, kecepatan){
    this.warna = warna;
    this.tipe = tipe;
    this.kecepatan = kecepatan;
  }


  maju(meter){
    console.log(`maju ${meter} meter dengan kecepatan ${this.kecepatan} km/h`);
  }

  mundur(meter){
    let kuranginKecepatan = (5/100)*this.kecepatan;
    console.log(`mundur ${meter} meter dengan kecepatan ${kuranginKecepatan} km/h`);
  }

  belokKiri(){
    console.log("mobil belok kiri");
  }

  belokKanan(){
    console.log("mobil belok kanan");
  }

  tambahKecepatan(kecepatanTambahan){
    let kecepatanTotal = kecepatanTambahan + this.kecepatan;
    console.log(`mobil menambah kecepatan dari ${this.kecepatan} km/h menjadi ${kecepatanTotal} km/h`)
  }



}


//mmebuat object dengan mengakses properti
const object = new Mobil("merah", "toyota", 120);
console.table(object); //tampilan hasil dalam bentuk table

//cara menggunakan method class
object.maju(20);
object.mundur(20);
object.belokKiri();
object.belokKanan();
object.tambahKecepatan(20);
