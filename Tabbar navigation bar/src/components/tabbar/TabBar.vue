<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .tab-bar {
    display: flex;
    text-align: center;
    background-color: #f6f6f6;


    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 54px;
    width: 100%;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }
</style>

