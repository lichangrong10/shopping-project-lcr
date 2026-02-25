<template>
  <div>
    <!-- 中间内容区 -->
    <router-view />
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style>
</style>