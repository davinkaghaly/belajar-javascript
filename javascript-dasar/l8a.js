var grade  = prompt("masukan grade :");
if (grade  <=40) {
    alert("nilai = " + grade + " grade E ");
}else if (grade > 40 && grade <=65) {
    alert("nilai = " + grade + " grade D");
}else if (grade > 65 && grade <=75) {
    alert("nilai = " + grade + " grade C");
}else if (grade > 75 && grade <=85) {
    alert("nilai = " + grade + " grade B");
}else if (grade > 85 && grade <=100) {
    alert("nilai = " + grade + " grade A");
} else {
    alert('Angka Yang Kamu Masukan Salah')
}