// Local Component
const Home = {
    template: `
        <div>Home</div>
    `
}
const About = {
    template: `
    <div>About</div>
`
}
const NotFound = {
    template: `
    <div>Halaman Tidak Ditemukan.</div>
`
}
const detailKelas = {
    template: `
    <div>
        <template v-if="detailkelas">
            <img :src="url_gambar(detailkelas.gambar)" width="200"/>
            <h3>{{ detailkelas.judul }} - {{ $route.params.idkelas }}</h3>
            <p>{{ detailkelas.deskripsi }}</p>
            <router-link to="/kelas">Kembali</router-link>
        </template>
        <p v-else="Kelas tidak ditemukan"></p>
    </div>
    `,
    created() {
        this.filterkelas()
    },
    data() {
        return {
            detailkelas: {}
        }
    },
    methods: {
        filterkelas() {
            let id = this.$route.params.idkelas
            let kelasdetail = database.ref('/kelas/' + id)
            kelasdetail.on('value', (item) => {
                this.detailkelas = item.val()
            })
        },
        url_gambar: function(gambar) {
            return gambar ? '../image/' + gambar : ''
        }
    }
}
const sectionKelas = {
    props: ['items', 'input'],
    template: `
        <div>
            <h3>Tambah Kelas :</h3>
            <form v-on:submit.prevent="submitkelas">
                <div class="input-group">
                    <input type="text" placeholder="Nama Kelas" v-model="kelas.judul"/>
                    <div class="error" v-if="error.judul"><small>{{ error.judul }}</small></div>
                </div>
                <div class="input-group">
                    <label>Deskripsi : </label><br>
                    <textarea v-model="kelas.deskripsi" placeholder="Deskripsi Kelas"></textarea>
                    <div class="error" v-if="error.deskripsi"><small>{{ error.deskripsi }}</small></div>
                </div>
                <div class="input-group">
                    <label>Masukkan Gambar : </label><br>
                    <img :src="previewImg" v-if="previewImg" width="100"/><br>
                    <input type="file" ref="gambar" v-on:change="upload"/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <hr>
            <h3>Daftar Kelas : {{ items.length }}</h3>
            <ul>
                <template v-if="items.length">
                    <li v-for="(item, index) of items">
                        <img :src="'image/'+ item.gambar" width="100" />
                        <p>
                            {{ index+1 }} - {{ item.judul }}
                            <a href="" v-on:click.prevent="$emit('hapuskelas', item.id)">Hapus Kelas</a>
                            <router-link :to="'/kelas/'+item.id">Lihat Detail Kelas</router-link>
                        </p>        
                    </li>
                </template>
                <li v-else>Kelas belum tersedia</li>
            </ul>
        </div>
    `,
    data: function() {
        return {
            kelas: {
                judul: '',
                deskripsi: '',
                gambar: ''
            },
            error: {
                judul: '',
                deskripsi: ''
            },
            previewImg: ''
        }
    },
    methods: {
        submitkelas: function() {
            this.error.judul = ''
            this.error.deskripsi = ''
            if (this.kelas.judul == '') {
                this.error.judul = "Judul is Required"
            }
            if (this.kelas.deskripsi == '') {
                this.error.deskripsi = "Deskripsi is Required"
            }
            if (this.kelas.judul && this.kelas.deskripsi) {
                const data = {
                    id: uuidv4(),
                    judul: this.kelas.judul,
                    deskripsi: this.kelas.deskripsi,
                    gambar: this.kelas.gambar
                }
                this.$emit('submitkelas', data)
                this.kelas.judul = ''
                this.kelas.deskripsi = ''
                this.kelas.gambar = ''
                this.previewImg = ''
                this.$refs.gambar.value = ''
            }
        },
        upload: function(event) {
                const nama_file = event.target.files[0].name
                this.kelas.gambar = nama_file
                this.previewImg = URL.createObjectURL(event.target.files[0])
            }
            // url_gambar: function(gambar) {
            //     return 'image/' + gambar
            // }
    }
}

// Global Component
Vue.component('header-component', {
    props: ['nama'],
    template: `
        <header>
            <img src="../image/vue.png" width="80" alt="">
            <p>{{ nama }}</p>
        </header> 
    `,
    data: function() {
        return {
            pesan: 'Hello Component'
        }
    }
})
Vue.component('footer-component', {
    template: `
        <footer id="footer">
            <slot></slot>
        </footer>
    `
})