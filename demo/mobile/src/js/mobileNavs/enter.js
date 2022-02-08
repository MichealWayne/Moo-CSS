/**
 * /src/js/index/enter.js -> index.html
 */

import 'moo-css-base/mobile.less';
import 'less/mobileNavs.less';

import Vue from 'vue';
import App from '@/views/app.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
