<template>
   <nav class="navbar navbar-light bg-light">
    <ul class="d-flex m-3">
    <li class="me-3">
        <RouterLink to="/">ToDo</RouterLink>
    </li>
    <li class="me-3">
        <RouterLink to="/gallery">Képgaléria</RouterLink>
      </li>
   </ul>
   </nav>
</template>

<script>
export default {
 name:"nav-bar-component"
}
</script>

<style scoped>

li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>