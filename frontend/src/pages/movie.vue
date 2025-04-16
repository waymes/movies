<script setup lang="ts">
import { Movie } from '../types/movie';

const movie = {
  id: 1,
  title: 'Rambo',
  description: 'Another cool action movie.',
  image:
    'https://upload.wikimedia.org/wikipedia/en/d/d6/First_blood_poster.jpg',
};
</script>

<template>
  <h1 class="my-5 text-center">Movie name</h1>
  <div class="d-flex">
    <div
      class="image me-3"
      :style="{ backgroundImage: 'url(' + movie.image + ')' }"
    />
    <div>
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.description }}</p>
    </div>
    <button type="button" class="btn btn-light edit ms-auto">
      Edit <i class="bi bi-pencil-square ms-2 edit-icon"></i>
    </button>
  </div>
</template>

<style scoped>
.image {
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.edit {
  height: 50px;
  display: flex;
  align-items: center;
}
.edit-icon {
  font-size: 20px;
}
</style>
