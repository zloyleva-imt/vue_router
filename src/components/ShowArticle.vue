<template>
	<h1>Artilce #{{ this.article_id }}</h1>
</template>

<script>
export default {
	name: 'ShowArticle',
	props:{
		article_id:{
			type: String
		}
	},
	mounted(){
		console.log(this.$route.params.article_id)
	}
}
</script>

<style>

</style>
