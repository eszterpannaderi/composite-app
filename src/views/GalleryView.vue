<template>
  <div class="container">
    <div class="mt-3 d-flex justify-content-center flex-wrap">
      <div
        v-for="galleryItem in galleryData"
        :key="galleryItem.id"
        class="d-inline-block gallery-item"
      >
        <img
          @click="SeeDetails(galleryItem.id)"
          :src="galleryItem.thumbnailUrl"
          alt="Image 1"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DataService from '../services/DataService'

export default {
  data() {
    return {
      galleryData: []
    }
  },
  created() {
    this.getGalleryData()
  },
  methods: {
    getGalleryData() {
      DataService.getGalleryData()
        .then((data) => {
          this.galleryData = data
        })
        .catch((error) => {
          console.error('Error fetching gallery data:', error)
        })
    },
    SeeDetails(id) {
      let route = this.$router.resolve({
        path: '/galleryItem',
        query: { ID: id }
      })
      window.open(route.href)
    }
  }
}
</script>

<style scoped>
.gallery-item {
  margin-bottom: 10px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
