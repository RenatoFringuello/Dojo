<script>
import AppQuestion from './components/AppQuestion.vue';
import AppLogo from './components/AppLogo.vue';
export default {
  name: 'App',
  components: {
    AppQuestion,
    AppLogo,
  },
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <main class="position-relative">
    <AppLogo />
    <AppQuestion class="position-absolute top-0 start-0 w-100" />
  </main>
</template>

<style lang="scss">
  main{
    background:$main-color;
    min-height: 100vh;
  }
</style>
