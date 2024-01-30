// var menu = prompt("masukan menu yang anda inginkan :");
// var jumlah = prompt("lu maunya brp? :");
// if (menu =="nasi goreng") {
//     alert('makanan yang lu pilih = nasi goreng\njumlah');
// }
var menuMakanan = {
    "Nasi Goreng": 20000,
    "Mie Goreng": 200000,
    "Ayam Goreng": 300000,
    "Sate mukidi": 150000,
    "Soto buaya": 220000
  };
  
  
  var menuText = "Daftar Menu Makanan:\n";
  for (var menu in menuMakanan) {
    menuText += menu + " - Rp" + menuMakanan[menu] + "\n";
  }
  alert(menuText);
  
  
  var pilihanMenu = prompt("lu hari ini mau makan apa?:");
  var jumlahMakanan = parseInt(prompt("lu maunya berapa??" + pilihanMenu + " yang ingin dipesan:"));
  
  
  if (menuMakanan.hasOwnProperty(pilihanMenu) && jumlahMakanan > 0) {
  
    var totalBiaya = menuMakanan[pilihanMenu] * jumlahMakanan;
  
  
    alert(
      "Pesanan Anda " + jumlahMakanan + " " + pilihanMenu +
      " Total Yang Harus di Bayar Rp" + totalBiaya
    );
  } else {
  
    alert("Pilihan Tidak ada di Menu");
  }
  
  
  alert("Terima kasih");