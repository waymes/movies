<script setup lang="ts">
interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
}
const { movie } = defineProps<{
  movie: Movie;
}>();
</script>

<template>
  <li class="list-group-item d-flex movie">
    <div
      class="image"
      :style="{ backgroundImage: 'url(' + movie.image + ')' }"
    />
    <div class="ms-3">
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.description }}</p>
    </div>
  </li>
</template>

<style scoped>
.movie:hover {
  background: #f8f9fa;
  cursor: pointer;
}
.image {
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;
}
</style>
