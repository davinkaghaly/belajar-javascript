var siswa = new Object();
siswa.namaDepan = "davinka ";
siswa.namaBelakang = "ghaly "
siswa.alamat = "bandung"
siswa.namalengkap =  function() {
    return this.namaDepan + ' ' + this.namaBelakang
};


alert("Nama : " + siswa.namalengkap());
alert("Alamat : " + siswa.alamat());
// function namalengkap(){

// }