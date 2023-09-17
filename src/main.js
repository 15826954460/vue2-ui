import Vue from "vue";
import App from "./App.vue";

/**
 * 本地组建引用
 */
// import "../components/css/card.scss";
// import Card from "../components/lib/card/index";
// console.log(111112, Card);
// Vue.use(Card);

// npm 包组建引用
import Vue2UiDemo from "vue2-ui-demo/dist/index.umd.js";
import "vue2-ui-demo/dist/css/card.css";
Vue.use(Vue2UiDemo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
