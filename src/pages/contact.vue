<template>
  <div>
    <Heard></Heard>
    <div class="main">
      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/imgs/banner.jpg" class="image" />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="shaixuan">
      <span class="zhankai" @click="dianji">点我展开</span>
    </div>
    <div class="mengceng" v-if="type===2"></div>
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
      currentDate: new Date(),
      type: 1,
    };
  },
  methods: {
    dianji() {
      this.type = 2;
      console.log("点击了");
    },
  },
};
</script>

<style scoped>
.mengceng {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.zhankai {
  display: flex;
  padding: 5px;
  border: 1px solid #999;
  background: skyblue;
  color: #fff;
  text-align: center;
}
.text {
  border: none;
  width: inherit;
  height: 20px;
  outline: none;
  margin: 15px 0 20px 10px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
