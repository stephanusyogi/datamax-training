// VAR, LET, CONST

// const KetuntasanBelajar = 85;
// function ketuntasan(nilai) {
//     if (nilai >= KetuntasanBelajar) {
//         console.log('Tuntas');
//     } else {
//         console.log('Tidak Tuntas');
//     }
// }
// ketuntasan(50);

// var kotak = 1;
// if (kotak == 1) {
//     let kotak = 10;
// }
// console.log(kotak);

// var buah = document.getElementsByTagName('h3');
// for (let x = 0; x < buah.length; x++) {
//     buah[x].onclick = function() {
//         alert('indexnya adalah, ' + x);
//     }
// }

// Kesimpulan => const tidak bisa di ubah nilainya(menumpuk nilai),
// let  bisa diubah nilainya tapi bersifat onScope atau hanya dalam bracketnya,
// var bisa diubah nilainya dan bersifat global .

// -------------------------------------------------------------------------------------

// DEFAULT PARAMETER

// function siswa(nama="Oliver", kelas=10, jurusan='IPS') {
//     console.log('Nama Siswa : ' + nama + ' , Kelas : ' + kelas + ' , Jurusan : ' + jurusan);
// }
// siswa('Yogi', 11, 'TKJ');

// Kesimpulan => Default Parameter digunakan untuk mengatasi apabila parameter
// ketika memanggil fungsi belum terisi karena menyebabkan undefined, tapi
// ketika parameter terisi dalam pemanggilan fungsi maka value default akan diganti .

// -------------------------------------------------------------------------------------

// SPREAD OPERATOR

// var coding = ['PHP', 'ES 6', 'HTML'];
// var coding2 = [...coding, 'C#', 'GoLang', 'CSS'];
// console.log(coding2);

// var siswaBaru = ['Rendi', 10, 'RPL'];
// function siswa(nama, kelas, jurusan) {
//     console.log('Nama Siswa : ' + nama + ' , Kelas : ' + kelas + ' , Jurusan : ' + jurusan);
// }
// siswa(...siswaBaru);

// Kesimpulan => Spread Operator digunakan untuk menaikkan array dalam variabel menjadi satu level

// -------------------------------------------------------------------------------------

// TEMPLATE STRING

// function siswa(nama, kelas, jurusan) {
//     console.log(`Nama Siswa : ${nama} , Kelas : ${kelas}, Jurusan : ${jurusan}`);
// }
// siswa('Tukul', 12, 'Akuntansi');

// Kesimpulan => Penulisan template string jauh lebih simple menggunakan `` karena
// mengambil variable cukup dengan penulisan ${nama_variable} .

// -------------------------------------------------------------------------------------

// MEMBUAT OBJECT

// var nama = 'yogi';
// var hobi = 'badminton';
// var orang = {
//     nama,
//     hobi,
//     tutorial(x) {
//         console.log(`Ini Tutorial ${x}`);
//     }
// }
// console.log(orang.tutorial("ES6"));

// Kesimpulan => Pembuatan object dapat dibuat melalui var dengan bracket {var1, var2} .

// -------------------------------------------------------------------------------------

// STRING METHOD

// var str = 'semangat yog';
// console.log(str.repeat(10)); // Untuk Repating
// console.log(str.startsWith('y')); // boolean dimulai dengan apa
// console.log(str.endsWith('i')); // boolean diakhiri dengan apa
// if (str.includes('semangat')) { // Untuk check apakah ada kata tersebut dalam string
//     console.log(true);
// } 

// -------------------------------------------------------------------------------------

// ARROW FUNCTION

// var cetak = function(nama) {
//     console.log('test');
// }
// sama dengan
// var cetak = (nama) => {
//     console.log('test');
// }
// sama dengan
// var cetak = (nama) => console.log('test');
// cetak("Yogi");

// -------------------------------------------------------------------------------------

// SET()

// var buah = new Set();
// buah.add('Mangga').add('Apel').add('Apel').add('Jambu');
// buah.delete('Jambu');
// buah.clear() // Menghapus data dalam variable
// buah.has('Mangga'); // boolean ada tidaknya data
// console.log(buah);
// console.log(buah.size);

// Kesimpulan => Set() digunakan untuk menyiapkan data berbentuk object tanpa ada yang terulang (unik)