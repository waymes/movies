<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Movies</RouterLink>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/login">Login</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
