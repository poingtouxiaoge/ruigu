<template>
  <div>
    <Heard></Heard>
    <div class="main">
      <el-row>
        <el-col
          :span="8"
          v-for="(o, index) in 2"
          :key="o"
          :offset="index > 0 ? 2 : 0"
        >
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
    <div class="seatch">
      <div class="input_text">
        <span class="tubiao"></span>
        <input type="text" class="text" placeholder="输入课程名字" />
      </div>
      <div class="lingdang"></div>
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
    Footer
  },
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style scoped>
.seatch {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 50px;
}
.input_text {
  display: flex;
  width: 96%;
  background: red;
  border-radius: 10000px;
  padding-right: 10px;
}
.tubiao {
  display: block;
  width: 20px;
  height: 20px;
  background: #999;
  margin-top: 15px;
  margin-left: 10px;
}
.lingdang {
  width: 20px;
  height: 20px;
  background: #666;
  margin: 15px 0;
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
