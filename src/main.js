import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router';
Vue.use(Router);

import Home from './components/Home';
import About from './components/About';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	}
];

Vue.config.productionTip = false

new Vue({
	router:new Router({routes}),
  render: h => h(App),
}).$mount('#app')
