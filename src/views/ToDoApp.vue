<template>
  <main>
    <div class="container d-flex justify-content-center mt-3">
      <to-do-app-component></to-do-app-component>
    </div>
  </main>
</template>
<script>

import ToDoAppComponent from '@/components/ToDoAppComponent.vue';
export default{
  components:{ToDoAppComponent}
}
</script>
