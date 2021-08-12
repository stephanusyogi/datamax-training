// Local Component
const Home = {
        template: `
        <div>Home</div>
    `
    }
    // Global Component
Vue.component('header-component', {
    props: ['nama'],
    template: `
        <header>
            <img src="https://vuejs.org/images/logo.svg" width="80" alt="">
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
            <p>copyright 2021 | Semangat Pog!</p>
        </footer>
    `
})
Vue.component('section-kelas', {
    props: ['items', 'input'],
    template: `
        <div>
            <h3>Tambah Kelas :</h3>
            <p><input type="text" placeholder="Nama Kelas" v-on:keyup.enter="submit" v-model="input"></p>
            <hr>
            <h3>Daftar Kelas : {{ items.length }}</h3>
            <ul>
                <template v-if="items.length">
                    <li v-for="(item, index) of items">{{ index+1 }} - {{ item }}</li>
                </template>
                <li v-else>Kelas belum tersedia</li>
            </ul>
        </div>
    `,
    data: function() {
        return {}
    },
    methods: {
        submit: function(event) {
            let task = event.target.value
            this.kelas.unshift(this.kelasbaru)
            this.kelasbaru = ''
        }
    }
})

const vm = new Vue({
    el: '#app',
    data: {
        kelas: ['Golang', 'PHP'],
        kelasbaru: ''
    },
    methods: {},
    computed: {},
    components: {
        'home': Home
    }
})