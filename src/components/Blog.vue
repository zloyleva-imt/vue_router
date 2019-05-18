<template>
	<div>
		<h1>Blog</h1>
		<ul>
			<li v-for="article in articles" :key="article.id">
				<router-link  :to="`/articles/${article.id}`">
					{{ article.name }}
				</router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
export default {
	name: 'Blog',
	data(){
		return{
			articles: [
				{id: 1, name: 'Article #1'},
				{id: 2, name: 'Article #2'},
				{id: 3, name: 'Article #3'},
				{id: 4, name: 'Article #4'},
				{id: 5, name: 'Article #5'},
				{id: 6, name: 'Article #6'},
			]
		}
	}
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
