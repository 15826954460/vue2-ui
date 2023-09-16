import Vue from "vue";
import App from "./App.vue";

import "../components/css/card.scss";
import Card from "../components/lib/card/index";
console.log(111112, Card);
Vue.use(Card);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
