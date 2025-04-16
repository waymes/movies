<script setup lang="ts">
import { Movie } from '../types/movie';

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
      <h4>
        <RouterLink class="link" :to="'/movies/' + movie.id">{{
          movie.title
        }}</RouterLink>
      </h4>
      <p>{{ movie.description }}</p>
    </div>
  </li>
</template>

<style scoped>
.movie:hover {
  background: #f8f9fa;
}
.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
.image {
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;
}
</style>
