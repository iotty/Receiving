let today = new Date();

let tanggal = today.getDate();
console.log(tanggal);

let bulan = today.getMonth();
let namaBulan = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let months = namaBulan[bulan];
console.log(months);

let tahun = today.getFullYear();
console.log(tahun);

let jam = today.getHours();
let menit = today.getMinutes();

document.getElementById('tanggal').innerHTML=`${months}, ${tanggal} ${tahun}`;
document.getElementById('waktu').innerHTML=`${jam}.${menit}`;

