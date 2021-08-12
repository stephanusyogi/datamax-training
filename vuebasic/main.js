const vm = new Vue({
    el: '#app',
    data: {
        name: 'Doremi Fasilasido',
        message: "Hello World!",
        qty: 3,
        namaDepan: 'Stephanus',
        namaBelakang: 'Yogi',
        bilangan: 1,
        link: '<a href="#">Link Test</a>',
        gambar: 'Image/image.jpg',
        menu: 'home',
        kelas: [],
        numbers: [1, 2, 3, 4, 5]
    },
    methods: {
        getName: function() {
            return 'Hello, ' + this.name
        },
        ubahNama: function(namabaru) {
            this.name = namabaru
            return this.getName()
        },
        handleClick: function() {
            this.bilangan++
                this.gambar = 'Image/image2.jpg'
        },
        cariBilanganGenap: function(data) {
            return data.filter(angka => {
                return angka % 2 == 0
            })
        }
    },
    computed: {
        totalBayar: function() {
            return this.qty * 10000
        },
        namaLengkap: function() {
            return this.namaDepan + this.namaBelakang
        },
        infoBilangan: function() {
            return this.bilangan % 2 === 0 ? 'Genap' : 'Ganjil'
        }
    }
})