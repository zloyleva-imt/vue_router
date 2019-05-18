<template>
	<nav>
		<ul>
			<li>
				<router-link to='/'>Home</router-link>
			</li>
			<li>
				<router-link to='/about'>About</router-link>
			</li>
			<li>
				<router-link to='/contacts'>Contacts</router-link>
			</li>
			<li>
				<router-link to='/articles'>Blog</router-link>
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
