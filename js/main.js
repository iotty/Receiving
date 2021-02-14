let today = new Date();

let tanggal = today.getDate();
console.log(tanggal);

let bulan = today.getMonth();
let namaBulan = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let months = namaBulan[bulan];
console.log(months);

let tahun = today.getFullYear();
console.log(tahun);

document.getElementById('tanggal').innerHTML=`${months}, ${tanggal} ${tahun}`;


var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);
