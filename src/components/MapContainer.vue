<template>
  <div>

  </div>

</template>

<script>

  export default {
    name: 'MapContainer',

    data () {
      return {
        menuActiveList:[],
        senceId: null,
        refreshParamFlag: 1,
        map2d: null,
        map3d: null,
        viewer: null
      }
    },
    watch: {

    },
    methods: {
    },
    computed: {

    },

    components: {

    },
    props: ['menuActive']
  }
</script>

<style scoped>
  .sidebar {
    margin: 0 auto;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.3)
  }
</style>
