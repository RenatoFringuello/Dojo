<script>
export default {
    name:'AppBox',
    props:{
        content:String,
    }
}
</script>

<template>
    <div class="wrapper px-4">
        <div class="box fs-small">
            {{ content }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .box{
        @include box(1rem, 0, $main-dark-color);
    }
</style>