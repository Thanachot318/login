import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import 'firebase/auth';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBYFCw7fe-jxHyd5CyRO-Lqq8Qt0o7-YGs",
    authDomain: "login-22741.firebaseapp.com",
    projectId: "login-22741",
    storageBucket: "login-22741.appspot.com",
    messagingSenderId: "97225241745",
    appId: "1:97225241745:web:073552a5752f3284d73b30",
    measurementId: "G-EHMES2D9KN"
  };
  firebase.initializeApp(firebaseConfig);
}

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
