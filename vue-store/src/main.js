import Vue from "vue";
import App from "./App.vue";
import md5 from 'js-md5';
import router from "./router";
import store from "./store";
import {Form, Icon, Swipe, SwipeItem, Toast,Field , Button,Tab, Tabs} from 'vant'
import 'lib-flexible/flexible'
import {prefix} from '@/common/js/utils'
Vue.use(Icon).use(Swipe).use(SwipeItem).use(Toast).use(Form).use(Button).use(Field).use(Tab).use(Tabs)
Vue.config.productionTip = false;

Vue.prototype.$md5 = md5;
Vue.prototype.prefix = prefix;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
