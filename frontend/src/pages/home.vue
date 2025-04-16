<script setup lang="ts">
import MovieListItem from '../components/movie-list-item.vue';

const movies = [
  {
    id: 1,
    title: 'Fast and Furious',
    description: 'A very cool action movie.',
    image:
      'https://www.fastxmovie.com/images/gallery/fast_x/character_driving/Vin_drive_1200x600px.jpeg',
  },
  {
    id: 2,
    title: 'Rambo',
    description: 'Another cool action movie.',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d6/First_blood_poster.jpg',
  },
];
</script>

<template>
  <h1 class="my-5 text-center">Movies list</h1>
  <ul class="list-group">
    <MovieListItem v-for="movie in movies" :movie="movie" />
  </ul>
</template>
