//array

const angka = [1,2,3,4,5];
// index 0,1,2,3,4

//add parameter
angka.push(6);

//cek array in table
console.table(angka);

//akses index value
console.log(angka[0]);
console.log(angka[1]);
console.log(angka[2]);
console.log(angka[3]);
console.log(angka[4]);
console.log(angka[5]);

//menghapus array
angka.pop() // menghapus dari belakang
angka.shift() // menghapus dari depan
delete angka[1]; // menghapus nilai saja, index tetap ada
console.log("nilai indeks ini : " + angka[1]) // nilai nya akan menjadi undefined

console.log("setelah dihapus");
console.table(angka);



//object

const mobil = {
    color : "merah",
    tipe : "toyota",
    rilis : "2004",
    kerusakan : {
        kerusakan1 : "atap jebol",
        kerusakan2 : "engsel pintu gak bisa ditutup"
    }
}

console.log(`mobil warna ${mobil.color}, tipe ${mobil.tipe}, rilis tahun ${mobil.rilis}, kerusakannya ${mobil?.kerusakan?.kerusakan1} dan ${mobil?.kerusakan?.kerusakan2}`);
