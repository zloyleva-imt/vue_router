import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router';
Vue.use(Router);

import VueLodash from 'vue-lodash'
Vue.use(VueLodash);

import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import ShowArticle from './components/ShowArticle';
import Blog from './components/Blog';

const articles = [
	{id: 1, name: 'Article #1'},
	{id: 2, name: 'Article #2'},
	{id: 3, name: 'Article #3'},
	{id: 4, name: 'Article #4'},
	{id: 5, name: 'Article #5'},
	{id: 6, name: 'Article #6'},
];

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/about_new',
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
		component: Blog,
		props: {articles}
	},
	{
		path: '/articles/:article_id',
		name: 'show_article',
		component: ShowArticle,
		props: (route) => ({
			article_id: route.params.article_id,
			// article: articles.reduce((res,el) => el.id==route.params.article_id?el:res, null)
			article: Vue._.findLast(articles, el => el.id==route.params.article_id)
		})
	}
];

Vue.config.productionTip = false

new Vue({
	router:new Router({routes}),
  render: h => h(App),
}).$mount('#app')
