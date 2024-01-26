<template>
  <nav-bar-component v-if="showNavbar"></nav-bar-component>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
export default {
  components: { NavBarComponent },
  computed: {
    showNavbar() {
      const hideNavbarURL = '/galleryItem'
      return this.$route.path !== hideNavbarURL
    }
  }
}
</script>
