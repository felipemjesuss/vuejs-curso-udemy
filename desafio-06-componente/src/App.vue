<template>
	<v-app>
		<Navigarion />

		<Toolbar />

		<v-content>

			<Carousel />

		</v-content>

		<Footer />
	</v-app>
</template>

<script>
	import Navigarion from './Navigation.vue'
	import Toolbar from './Toolbar.vue'
	import Footer from './Footer.vue'
	import Carousel from './Content.vue'

	export default {
		components: { 
			Navigarion,
			Toolbar,
			Carousel,
			Footer
		}
	}
</script>
