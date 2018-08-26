const routes = [
    { path: '/', component: Home },
    { path: '/usershow', component: UserShow },
    { path: '/userregister', component: UserRegister },
    { path: '/userlogin', component: UserLogin }
];
const router = new VueRouter({
    routes: routes // (缩写) 相当于 routes: routes
});
const app = new Vue({
    router:router
}).$mount('#app')