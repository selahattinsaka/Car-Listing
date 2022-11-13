import Vue from 'vue';
import Snotify from 'vue-snotify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.use(Snotify, {
  toast: {
    position: 'rightTop',
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
