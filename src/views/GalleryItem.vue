<template>
  <div class="modal-wrapper">
    <div v-if="currentItem" class="modal-body d-flex justify-content-center align-items-center">
      <button
        :disabled="disable(1)"
        @click="stepImage(currentItem.id - 1)"
        class="btn btn-light font-bold"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </button>
      <img class="mx-5" :src="currentItem.url" :alt="currentItem.title" />
      <button
        :disabled="disable(2)"
        @click="stepImage(currentItem.id + 1)"
        class="btn btn-light font-bold"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
    <div
      v-else
      class="modal-body d-flex justify-content-center align-items-center text-light display-6"
    >
      Hibás URL.
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
  computed: {
    currentItem() {
      return this.galleryData.find((x) => x.id == this.$route.query.ID)
    }
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
    stepImage(id) {
      const currentQuery = { ...this.$route.query }
      currentQuery.ID = id
      this.$router.push({ query: currentQuery })
    },
    disable(type) {
      if (type == 2) {
        return this.currentItem.id === Math.max(...this.galleryData.map((x) => x.id))
      } else if (type == 1) {
        return this.currentItem.id === Math.min(...this.galleryData.map((x) => x.id))
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.modal-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.423);
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: 2000 !important;
}

.modal-body {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  max-width: 100%;
  max-height: 100%;
}
</style>
