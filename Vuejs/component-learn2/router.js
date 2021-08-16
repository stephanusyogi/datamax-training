// Routing
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/kelas', component: sectionKelas },
    { path: '*', component: NotFound },
    {
        path: '/kelas/:idkelas',
        component: detailKelas
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})