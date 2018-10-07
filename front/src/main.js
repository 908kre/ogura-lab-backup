import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '@/App'
import routes from '@/routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({ routes })
})
