// VAR & CONST
// 
//
// ES5
// var myName = "Stephanus Yogi";
// myName = "Pradipta Setiawan";
// console.log(myName); // Hasil nya Pradipta Setiawan
//
// ES6
// const myCar = "Kijang";
// myCar = "BMW";
// console.log(myCar); // Hasilnya Kijang
//
// Kesimpulan => Const tidak bisa diganti value nya, contoh kasus : token .

// ------------------------------------------------------------------------------------------

// LET & VAR
// 
// 
// ES5
// var myCars = ['BMW', 'Mazda', 'Toyota'];
// for(var i = 0; i<myCars.length; i++){
//     console.log(myCars[i]);
// }
// console.log(i); // Hasilnya keluar 3, walaupun console.log diluar bracket for
// 
// ES6
// const myCars = ['BMW', 'Mazda', 'Toyota'];
// for (let i = 0; i < myCars.length; i++) {
//     console.log(myCars[i]);
// }
// console.log(i); // Hasilnya i not definded, karena berada diluar bracket for .
// 
// Kesimpulan => apabila mendeklarasikan nilai dengan tipe data let dalam suatu bracket, apabila di render diluar bracket maka hasilnya mot defined .

// ------------------------------------------------------------------------------------------

// STRING CONCATENATION
//
// 
// const user_place = document.getElementById('user');
// ES5
// const user_logged = 'Tony';
// user_place.innerHTML = 'Hi, ' + user_logged + ' Apa Kabar ?';
// 
// ES6
// const user_logged = 'Tony';
// user_place.innerHTML = `Hi, ${user_logged}, Apa Kabar ?`;
// 
// Kesimpulan => Di ES6 data yang telah dideklarasikan jauh lebih mudah dan sederhana dengan menggunakan `` dan ${} .

// ------------------------------------------------------------------------------------------

// OBJECT LITERALS
// 
// 
// const cart_items = document.getElementById('cart');
// ES5
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }
// var getProduct = addProduct("Iphone 11", "Gadget");
// console.log(getProduct);
// 
// ES6 
// function addProduct(name, category) {
//     return {
//         name,
//         category
//     }
// }
// var getProduct = addProduct("Iphone 11", "Gadget");
// cart_items.innerHTML = `Product ${getProduct.name} Category : ${getProduct.category}`;
// 
// Kesimpulan => Mendeklarasikan nilai object pada return tidak perlu di deklarasi ulang pada ES6

// ------------------------------------------------------------------------------------------

// ARRAY FOREACH
// 
// 
// const skills_holder = document.getElementById('skills');
// 
// ES6
// const mySkills = ['Front End', 'Photo Editor', 'Riset'];
// var parent = '<ul>';
// mySkills.forEach((skill) => {
//     parent += '<li>' + skill + '</li>';
//     console.log(skill);
// });
// parent += '</ul>';
// skills_holder.innerHTML = parent;
// 
// Kesimpulan => Salah satu cara penggunaan forEach di ES6 .

// ------------------------------------------------------------------------------------------

// MAP & FILTER
// 
// 
// const skills_holder = document.getElementById('skills');
// ES6
// Map Data
// const mySkills = ['Front End', 'Photo Editor', 'Riset'];
// const printSkills = mySkills.map(skill => {
//     return skill;
// });
// skills_holder.innerHTML = printSkills;
// 
// Filter Data
// const mySkills = ['Front End', 'Photo Editor', 'Riset'];
// const myPrimarySkill = mySkills.filter(skill => {
//     return skill === 'Front End';
// });
// console.log(myPrimarySkill);
// 
// Kesimpulan => Fungsi map hampir sama seperti forEach hanya saja
// menurut dokumentasi map lebih cepat, untuk filter digunakan untuk
// menyaring data .

// ------------------------------------------------------------------------------------------

// Classes
// 
// 
// const data = document.getElementById('data');
// ES6
// Modul Siswa Kelas
// class Siswa {
//     constructor(username, password, id_kelas) {
//         this.username = username;
//         this.password = password;
//         this.id_kelas = id_kelas;
//     }
//     gabung() {
//         console.log(this.username + ' telah bergabung pada kelas ' + this.id_kelas);
//     }
// }
// let tambahSiswa = new Siswa('stephanusyogi', 'test123', 1);
// tambahSiswa.gabung();
// 
// Kesimpulan => Alur sederhana untuk memanggil function pada class
// yang memiliki parameter .

// ------------------------------------------------------------------------------------------

// Inheritance
// 
// 
// const data = document.getElementById('data');
// ES6
// Modul Siswa Kelas
// class Siswa {
//     constructor(username, password, id_kelas) {
//         this.username = username;
//         this.password = password;
//         this.id_kelas = id_kelas;
//     }
//     gabung() {
//         console.log(this.username + ' telah bergabung pada kelas ' + this.id_kelas);
//     }
//     hitungMember() {
//         console.log('Tersedia 100 Member');
//     }
// }
// class Langganan extends Siswa { // extends untuk menurunkan dari parent
//     constructor(username, paket) {
//         super(username); // super untuk mengambil variabel dari parent
//         this.paket = paket;
//     }
//     gabungPaket() {
//         console.log('Hi, ' + this.username + ' telah langganan paket ' + this.paket);
//     }
// }
// let tambahLangganan = new Langganan('stephanusyogi', 'Premium');
// tambahLangganan.gabungPaket();
// 
// Kesimpulan => Child class dapat mengambil semua function dari Parent Class
// yang memiliki parameter .