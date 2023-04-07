<script>
export default {
    name:'AppBox',
    props:{
        content:String,
        className:String,
    }
}
</script>

<template>
    <div class="wrapper h-100">
        <div class="box fs-small h-100 " :class="className">
            <div class="content d-flex align-items-center">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box{
    @include box(1rem, 1.5rem, goldenrod);
}
</style>