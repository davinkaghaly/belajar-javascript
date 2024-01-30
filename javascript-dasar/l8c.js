var pilihanSuit = ["gajah", "semut", "orang"];

var pilihanUser = prompt("Pilih salah satu: gajah, semut, orang: ");

if (pilihanSuit.includes(pilihanUser)) {
  var pilihanKomputer = pilihanSuit[Math.floor(Math.random() * 3)];

  var pemenang;
  if (pilihanUser == pilihanKomputer) {
    pemenang = "seri";
  } else if (pilihanUser == "gajah" && pilihanKomputer == "semut") {
    pemenang = "pemain";
  } else if (pilihanUser == "semut" && pilihanKomputer == "orang") {
    pemenang = "pemain";
  } else {
    pemenang = "komputer";
  }

  if (pemenang === "pemain") {
    alert("Hasil Permainan: \nPemain memilih: " + pilihanUser + "\nKomputer memilih: " + pilihanKomputer + "\nKAMU KALAH!");
  } else if (pemenang === "komputer") {
    alert("Hasil Permainan: \nPemain memilih: " + pilihanUser + "\nKomputer memilih: " + pilihanKomputer + "\nKAMU MENANG!");
  } else {
    alert("Hasil Permainan: \nPemain memilih: " + pilihanUser + "\nKomputer memilih: " + pilihanKomputer + "\nSERI!");
  }
} else {
  alert("Pilihanya Gaada Bang!");
}