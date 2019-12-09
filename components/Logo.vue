<template>
  <img src="/img/mawahe-avatar.jpg" alt="avatar" class="mawahe-avatar" />
</template>
<style>
.mawahe-avatar {
  border-radius: 50%;
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
