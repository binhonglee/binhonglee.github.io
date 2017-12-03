<template>
  <div class="navbar">
      Testing
  </div>
</template>

<script>
export default {
  name: 'navbar',
  mounted () {
    const that = this;
    that.showDiv = true;
    that.$nextTick(function () {
        that.getWindowWidth()
    })
  },
  methods: {
      getWindowWidth () {
          this.x = this.$refs.prev.clientWidth;
      }
  }
}
</script>

<style scoped>
.navbar {
    height: 40px;
    width: 100%;
}
</style>
