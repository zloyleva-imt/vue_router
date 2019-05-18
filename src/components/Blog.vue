<template>
	<div>
		<h1>Blog</h1>
		<ul>
			<li v-for="article in articles" :key="article.id">
				<router-link :to="{name:'show_article', params:{article_id:article.id}}">
					{{ article.name }}
				</router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
export default {
	name: 'Blog',
	props:{
		articles:{}
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
