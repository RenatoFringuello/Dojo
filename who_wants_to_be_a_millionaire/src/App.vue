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
  <main>
    <AppLogo />
    <AppQuestion />
  </main>
</template>

<style lang="scss">
  main{
    background:$main-color;
    min-height: 100vh;
  }
</style>
