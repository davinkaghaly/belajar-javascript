//object
var siswa = new Object();
siswa.namaDepan = "davinka";
siswa.namaBelakang = "ghaly";
siswa.alamat = "bandung";
siswa.namaLengkap = function () {
  return this.namaDepan + " " + this.namaBelakang;
};

//object JSON
var siswa2 = {
  namaDepan: "cahwi",
  namaBelakang: "bagas",
  alamat: "bandung",
  namaLengkap: function () {
    return this.namaDepan + " " + this.namaBelakang;
  },
};

alert("Nama :" + siswa.namaLengkap());
alert("Nama : " + siswa2.namaLengkap());

// function namaLengkap() {

// // }