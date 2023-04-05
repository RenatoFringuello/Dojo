<script>
export default {
    name:'AppLogo'
}
</script>

<template>
    <img src="../assets/sparkles.png" alt="logo" class="position-absolute sparkles">
    <img src="../assets/sparkles.png" alt="logo" class="position-absolute sparkles reverse">
    <img src="../assets/sparkles.png" alt="logo" class="position-absolute sparkles">
    <img src="../assets/sparkles.png" alt="logo" class="position-absolute sparkles reverse">
    <img src="../assets/mil_logo.avif" alt="logo" class="position-absolute w-50">
</template>

<style lang="scss">
    img{
      object-fit: contain;
      object-position: center;
      transform: translateX(-50%);
      left:50%;
      filter: drop-shadow(0px 0px 50px #fff8);
      -webkit-filter: drop-shadow(0px 0px 50px #fff8);

      &.sparkles{
        filter: brightness(0) invert(1);
        width: 35%;
        transform: translate(-50%, 30%) rotate(120deg);
        left:calc(50% - 70px);
        
        &.reverse{
          transform: translate(-50%, 60%) rotate(-60deg);
          left:calc(50% + 70px);
        }
      }
    }
</style>