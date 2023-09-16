import Card from './card';

const components = {
  Card,
};

// 全局组建
export default {
  install(Vue) {
    components.map((com) => com.install(Vue));
  },
};

// 局部组建
export { Card };
