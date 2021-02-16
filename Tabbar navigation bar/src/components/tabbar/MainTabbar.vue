<template>
    <TabBar>
      <TabBarItem path="/home" isActivecolor="red">
        <img src="@/assets/img/tabbar/home.svg" slot="item-icon" alt="" />
        <img src="@/assets/img/tabbar/home_active.svg" slot="item-icon-active" alt="" />
        <div slot="item-name">首页</div>
      </TabBarItem>
      <TabBarItem path='/category' isActivecolor="red">
        <img src="@/assets/img/tabbar/category.svg" slot="item-icon" alt="" />
        <img src="@/assets/img/tabbar/category_active.svg" slot="item-icon-active" alt="" />
        <div slot="item-name">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" isActivecolor="red">
        <img src="@/assets/img/tabbar/shopcart.svg" slot="item-icon" alt="" />
        <img src="@/assets/img/tabbar/shopcart_active.svg" slot="item-icon-active" alt="" />
        <div slot="item-name">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" isActivecolor="red">
        <img src="@/assets/img/tabbar/profile.svg" slot="item-icon" alt="" />
        <img src="@/assets/img/tabbar/profile_active.svg" slot="item-icon-active" alt="" />
        <div slot="item-name">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
	export default {
		name: "MainTabbar",
    components:{
      TabBar,
      TabBarItem,
    }
	}
</script>

<style scoped>
img{
  width: 20px;
  height: 20px;
}

</style>
