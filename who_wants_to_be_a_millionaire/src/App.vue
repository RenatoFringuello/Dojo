<script>
import AppQuestion from './components/AppQuestion.vue';
import AppLogo from './components/AppLogo.vue';
export default {
  name: 'App',
  components: {
    AppQuestion,
    AppLogo,
  }
}
</script>

<template>
  <main class="position-relative">
    <AppLogo />
    <AppQuestion />
  </main>
</template>

<style lang="scss">
  @use './style/general.scss' as *;

  main{
    background:#040444;
    min-height: 100vh;
  }

</style>
