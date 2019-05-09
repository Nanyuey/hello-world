<template>
  <div class="tool-bar">
    <div class="demo1"></div>
    <div class="demo2"></div>
    <div class="demo3"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tool-bar {
  display: flex;
  width: 50%;
}
.demo1 {
  width: 30px;
  height: 30px;
  background-image: url('~@/assets/images/demo1.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.demo2 {
  width: 30px;
  height: 30px;
  background-image: url('~@/assets/images/demo2.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.demo3 {
  width: 30px;
  height: 30px;
  background-image: url('~@/assets/images/demo3.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
