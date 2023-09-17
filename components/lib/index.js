import MCard from "./card";

const components = [MCard];

// 全局组建
export default {
  install(Vue) {
    components.map((com) => com.install(Vue));
  },
};

// 局部组建
export { MCard };
