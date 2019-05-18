<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
	<Navigation/>
	<router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
export default {
  name: 'app',
  components:{
	  Navigation
  }
}
</script>

<style lang="scss">
	#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	}
	nav{
		ul{
			margin: 0;
			display: flex;
			justify-content: space-between;
			li{
				list-style-type: none;
				padding: 0;
				a {
					text-decoration: none;
					color: #42b983;
				}
			}
		}
	}
</style>
