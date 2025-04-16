<script setup lang="ts">
import { ref } from 'vue';
import { type Movie } from '../types/movie';
import MovieEditForm from '../components/movie-edit-form.vue';

const movie: Movie = {
  id: 1,
  title: 'Rambo',
  description: 'Another cool action movie.',
  image:
    'https://upload.wikimedia.org/wikipedia/en/d/d6/First_blood_poster.jpg',
};

const modalState = ref(false);
function toggleModal() {
  modalState.value = !modalState.value;
}
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
    <button
      @click="toggleModal"
      type="button"
      class="btn btn-light edit ms-auto"
    >
      Edit <i class="bi bi-pencil-square ms-2 edit-icon"></i>
    </button>
    <MovieEditForm
      :show="modalState"
      :movie="movie"
      :closeModal="toggleModal"
    />
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
