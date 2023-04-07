<script>
export default {
    name:'AppLogo'
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="col-12 col-sm-8 col-md-6 m-auto">
      <div class="wrapper position-relative">
        <img src="../assets/sparkles.png" alt="logo" class="position-absolute w-50 sparkles">
        <img src="../assets/sparkles.png" alt="logo" class="position-absolute w-50 sparkles reverse">
        <img src="../assets/sparkles.png" alt="logo" class="position-absolute w-50 sparkles">
        <img src="../assets/sparkles.png" alt="logo" class="position-absolute w-50 sparkles reverse">
        <img src="../assets/mil_logo.png" alt="logo" class="d-block mx-auto w-50">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  padding-top: 3rem;
  img{
    object-fit: contain;
    object-position: center;
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