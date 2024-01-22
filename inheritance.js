// superclass
class Angkadefault {

  constructor(defaultAngka){
    this.defaultAngka = 10; // menggunakan defaultAngka di class lain
  }

}




//subclass
class Operasi extends Angkadefault{

  penjumlahan(inputAngka){
    let hasilkurang = this.defaultAngka + inputAngka;
    return hasilkurang;

  }

  pengurangan(inputAngka){
    let hasilkurang = this.defaultAngka - inputAngka;
    return hasilkurang;
  }

  perkalian(inputAngka){
    let hasilperkalian = this.defaultAngka * inputAngka;
    return hasilperkalian;
  }


  semuaOperator(inputAngka){
    console.log(`penjumlahan : ${this.penjumlahan(inputAngka)}, pengurangan : ${this.pengurangan(inputAngka)}, perkalian : ${this.perkalian(inputAngka)}`);
  }

}




const object = new Operasi();

//menggunakan operasi dari subclass
console.log(object.penjumlahan(10));
object.semuaOperator(20);
