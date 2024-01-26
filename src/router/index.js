import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDoApp.vue'
import GalleryView from '@/views/GalleryView.vue'
import GalleryItem from '@/views/GalleryItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: ToDo
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/galleryItem',
      name: 'galleryItem',
      component: GalleryItem
    }
  ]
})

export default router
