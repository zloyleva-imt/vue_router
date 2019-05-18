import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router';
Vue.use(Router);

import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import ShowArticle from './components/ShowArticle';
import Blog from './components/Blog';

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
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: Contacts
	},
	{
		path: '/articles',
		name: 'blog',
		component: Blog
	},
	{
		path: '/articles/:article_id',
		name: 'show_article',
		component: ShowArticle,
		props: (route) => ({article_id: route.params.article_id})
	}
];

Vue.config.productionTip = false

new Vue({
	router:new Router({routes}),
  render: h => h(App),
}).$mount('#app')
