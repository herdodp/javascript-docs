
//function yang siap digunakan
const date = new Date();


const timeJakarta = date.toLocaleString('id-ID', {
  timeZone : 'Asia/Jakarta'
});

console.log(timeJakarta)
