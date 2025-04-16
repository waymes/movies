<script setup lang="ts"></script>

<template>
  <h1 class="my-5 text-center">Login</h1>
  <form class="login-form mx-auto text-bg-light px-3 py-5">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" />
    </div>
    <button type="submit" class="btn btn-primary w-100 mt-3">Login</button>
  </form>
</template>

<style scoped>
.login-form {
  max-width: 300px;
}
</style>
