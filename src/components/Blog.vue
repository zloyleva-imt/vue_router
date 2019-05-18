<template>
	<div>
		<h1>Blog</h1>
		<p>Current page is {{ this.page }}</p>
		<ul>
			<li v-for="article in articles" :key="article.id">
				<router-link :to="{name:'show_article', params:{article_id:article.id}}">
					{{ article.name }}
				</router-link>
			</li>
		</ul>
		<Pagination/>
	</div>
</template>

<script>
import Pagination from './Pagination';
export default {
	name: 'Blog',
	components:{
		Pagination
	},
	props:{
		articles:{},
		page: {
			type: Number
		}
	},
}
</script>

<style lang="scss">
	ul{
		margin: 0;
		padding: 0;
		li{
			padding: 0;
			list-style-type: none;
		}
	}
</style>
