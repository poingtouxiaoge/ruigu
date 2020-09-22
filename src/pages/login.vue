<template>
  <div class="login">
    <div class="box">
      <div class="title">
        <div class="denglu" @click="tologin1">登录</div>
        <div class="zhuce" @click="tologin2">注册</div>
      </div>
      <!-- 登录模块 -->
      <div class="login_num" v-if="type == 1">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="账号">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formLabelAlign.region" type="password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 注册模块 -->
      <div class="login_num" v-if="type == 2">
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
          <el-form-item label="手机号">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="设置密码">
            <el-input v-model="formLabelAlign.region" type="text"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="btns" @click="toindex" v-if="type == 1">登录</div>
      <div class="btns" @click="toindex1" v-if="type == 2">注册</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 1,
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
      },
    };
  },

  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
    tologin1() {
      this.type = 1;
      this.increment();
    },
    tologin2() {
      this.type = 2;
    },
    toindex() {
      alert("登录成功");
      this.$router.push("/");
    },
    toindex1() {
      alert("注册成功，赶快去登录吧！！");
      this.type = 1;
    },
  },
};
</script>

<style scoped>
.login {
  width: 35.142857rem;
  height: 500px;
  padding: 10% 0;
  text-align: center;
  background: url("../assets/imgs/login_bg.jpg");
}
.box {
  width: 600px;
  margin: 0 auto;
  padding-bottom: 20px;
  background: #fff;
}
.title {
  display: flex;
  justify-content: space-between;
  font-size: xx-large;
  padding: 20px 30px;
  font-weight: 600;
  color: cornflowerblue;
}
.denglu,
.zhuce {
  cursor: pointer;
}
.denglu:hover,
.zhuce:hover {
  color: aqua;
}
.login_num {
  padding: 20px 30px;
}
.btns {
  padding: 5px 0;
  width: 160px;
  text-align: center;
  background: skyblue;
  color: #fff;
  font-size: 14px;
  border-radius: 200px;
  margin-left: 200px;
}
.btns:hover {
  background: pink;
  color: #333;
  cursor: pointer;
}
</style>
