<template>
  <div class="tab-bar-item" @click="btnclick">
    <div v-if="!isactive">
      <slot name="item-icon" class="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isTestColor" class="item-test">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    data() {
      return {
        paths: this.path
      }
    },
    props: {
      path: String,
      isActivecolor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isactive() {
        return this.$route.path.indexOf(this.paths) == 0
      },
      isTestColor() {
        return this.isactive ? {color: this.isActivecolor} : {}
      }
    },
    methods: {
      btnclick() {
        // console.log("wobeidjan")
        this.$router.push(this.paths)
      }
    },
    created() {
      // console.log(this.$route)
    }
  };
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }

  .item-icon {
    width: 20px;
    height: 20px;
  }

  /*.active {*/
  /*  color: red;*/
  /*}*/
  .item-test {
    margin: 4px;
  }
</style>



