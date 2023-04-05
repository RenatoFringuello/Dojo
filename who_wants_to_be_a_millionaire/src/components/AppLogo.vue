<script>
export default {
    name:'AppLogo'
}
</script>

<template>
  <div class="row">
    <div class="col-12 col-md-6 position-relative m-auto">
      <div class="wrapper position-absolute w-100 h-100">
        <img src="../assets/sparkles.png" alt="logo" class="position-absolute w-50 sparkles">
        <img src="../assets/sparkles.png" alt="logo" class="position-absolute w-50 sparkles reverse">
        <img src="../assets/sparkles.png" alt="logo" class="position-absolute w-50 sparkles">
        <img src="../assets/sparkles.png" alt="logo" class="position-absolute w-50 sparkles reverse">
        <img src="../assets/mil_logo.png" alt="logo" class="position-absolute w-50">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  padding-top: 5rem;
  img{
    object-fit: contain;
    object-position: center;
    transform: translateX(-50%);
    left:50%;
    filter: drop-shadow(0px 0px 50px #fff8);
    -webkit-filter: drop-shadow(0px 0px 50px #fff8);

    &.sparkles{
      filter: brightness(0) invert(1);
      transform: translate(-50%, 30%) rotate(120deg);
      left:30%;
      
      &.reverse{
        transform: translate(-50%, 100%) rotate(-60deg);
       left:70%;
      }
    }
  }
}
</style>