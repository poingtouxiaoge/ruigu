<template>
  <div class="home">
    <Heard></Heard>
    <div class="main">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <img :src="item.img" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Heard from "../components/Heard";
import Footer from "../components/Footer";
export default {
  components: {
    Heard,
    Footer,
  },
  data() {
    return {
      activeIndex2: "1",
      list: [
        {
          img: require("../assets/imgs/banner.jpg"),
        },
        {
          img: require("../assets/imgs/banner1.jpg"),
        },
        {
          img: require("../assets/imgs/banner2.jpg"),
        },
        {
          img: require("../assets/imgs/banner3.jpg"),
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 1.125rem;
  opacity: 0.75;
  line-height: 18.75rem;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 100%;
}
</style>
