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
const sectionKelas = {
    props: ['items', 'input'],
    template: `
        <div>
            <h3>Tambah Kelas :</h3>
            <p><input type="text" placeholder="Nama Kelas" v-on:keyup.enter="$emit('submitkelas', $event)"></p>
            <hr>
            <h3>Daftar Kelas : {{ items.length }}</h3>
            <ul>
                <template v-if="items.length">
                    <li v-for="(item, index) of items">{{ index+1 }} - {{ item }}
                        <a href="" v-on:click.prevent="$emit('hapuskelas', index)">Hapus Kelas</a>
                    </li>
                </template>
                <li v-else>Kelas belum tersedia</li>
            </ul>
        </div>
    `,
    data: function() {
        return {}
    },
    methods: {}
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
            <slot></slot>
        </footer>
    `
})

// Routing
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/kelas', component: sectionKelas }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

const vm = new Vue({
    el: '#app',
    router,
    data: {
        kelas: ['Golang', 'PHP']
    },
    methods: {
        hapuskelas: function(index) {
            this.kelas.splice(index, 1)
        },
        submitkelas: function(event) {
            let kelasbaru = event.target.value
            this.kelas.push(kelasbaru)
        }
    },
    computed: {},
    components: {
        'home': Home,
        'about': About
    }
})