<template>
    <div>
      <div class="title">地形控制</div>

      <div class="panelBody" style="padding: 10px">
        <el-checkbox v-model="hidden">隐藏地形</el-checkbox>
        <el-checkbox v-model="close">地形起伏</el-checkbox>
        <div class="block" style="padding: 10px 0 10px 0">
          <span class="demonstration">地形透明度：</span>
          <el-slider v-model="value"></el-slider>
        </div>
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
