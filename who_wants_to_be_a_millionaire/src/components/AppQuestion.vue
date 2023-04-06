<script>
import AppBox from './AppBox.vue';

export default {
    name: "AppQuestion",
    components: { AppBox }
}
</script>

<template>
    <section>
        <div class="question-box m-auto mb-5">
            <div class="row g-4">
                <div class="col-12">
                    <AppBox :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic laborum harum aliquid quod soluta commodi quae, culpa ex numquam excepturi, rem at corrupti ratione suscipit voluptates earum consectetur explicabo!'"/>
                </div>
                <div class="col-12 col-md-6">
                    <AppBox :content="'A. sdfgsdfgfg edfg'"/>
                </div>
                <div class="col-12 col-md-6">
                    <AppBox :content="'B. sdfgsdfgfg edfg'"/>
                </div>
                <div class="col-12 col-md-6">
                    <AppBox :content="'C. sdfgsdfgfg edfg'"/>
                </div>
                <div class="col-12 col-md-6">
                    <AppBox :content="'D. sdfgsdfgfg edfg'"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section{
        position: relative;
        background-color: #0004;
        min-height: inherit;
        color: white;
        display: flex;
        padding: 8rem;
    }
</style>