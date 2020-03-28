<template>
	<v-app>
		<Navigarion />

		<Toolbar />

		<Content />

		<Footer />
	</v-app>
</template>

<script>
import Navigarion from './Navigation.vue'
import Toolbar from './Toolbar.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
	components: { 
		Navigarion,
		Toolbar,
		Content,
		Footer
	}
}
</script>
