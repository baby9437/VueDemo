<template>
    <div>
      <el-checkbox v-model="hidden">隐藏地形</el-checkbox>
      <el-checkbox v-model="close">关闭地形起伏</el-checkbox>
      <div class="block">
        <span class="demonstration">地形透明度：</span>
        <el-slider v-model="value"></el-slider>
      </div>
    </div>
</template>

<script>

    export default {
        name: 'terrain',
        data() {
            return {
              hidden:true,
              close:false,
              value:0
            }
        },
        watch: {},
        computed: {},
        methods: {},
        mounted() {

        },
        components: {},
    }
</script>
<style scoped>

</style>
