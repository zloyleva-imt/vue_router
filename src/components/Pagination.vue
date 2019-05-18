<template>
	<ul class="pagination">
		<li><router-link :to="{name: 'blog', query:{page:1}}">1</router-link></li>
		<li><router-link :to="{name: 'blog', query:{page:2}}">2</router-link></li>
		<li><router-link :to="{name: 'blog', query:{page:3}}">3</router-link></li>
	</ul>
</template>

<script>
export default {
	name: 'Pagination'
}
</script>

<style lang="scss" scope>
	ul.pagination{
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		li{
			margin: 1rem;
			list-style-type: none;
			padding: 0;
			a{
				text-decoration: none;
				color: grey;
			}
		}
	}
</style>
