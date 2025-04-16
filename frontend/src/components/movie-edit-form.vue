<script setup lang="ts">
import { ref } from 'vue';
import { type Movie } from '../types/movie';

const { movie, show, closeModal } = defineProps<{
  movie: Movie;
  show: boolean;
  closeModal: () => void;
}>();

const title = ref(movie.title);
const description = ref(movie.description);
const image = ref(movie.image);
</script>

<template>
  <div v-if="show" class="modal d-block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Movie {{ movie.title }}</h5>
        </div>
        <div class="modal-body">
          <form class="login-form">
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input class="form-control" id="title" v-model="title" />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <input
                class="form-control"
                id="description"
                v-model="description"
              />
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">Image</label>
              <input class="form-control" id="image" v-model="image" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.5);
}
</style>
