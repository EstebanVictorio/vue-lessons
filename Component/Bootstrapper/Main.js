import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from 'Settings/Routes';
import Base from 'Container/Layout/Base';
import "@material/typography/dist/mdc.typography.css"

const routes =
    [
        Routes.home,
        Routes.product
    ];

const router = new VueRouter({routes});
Vue.use(VueRouter);
const app = new Vue(
    {
        el: '#app',
        router,
        render:h => <Base/>
    }
    );