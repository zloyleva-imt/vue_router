<template>
	<nav>
		<ul>
			<li>
				<router-link :to="{name: 'home'}">Home</router-link>
			</li>
			<li>
				<router-link :to="{name: 'about'}">About</router-link>
			</li>
			<li>
				<router-link :to="{name: 'contacts'}">Contacts</router-link>
			</li>
			<li>
				<router-link :to="{name: 'blog'}">Blog</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "Navigation"
}
</script>

<style>

</style>
