<template>
  <div class="login">
    <div class="box">
      <div class="title">
        <div class="denglu" @click="tologin1">登录</div>
        <div class="zhuce" @click="tologin2">注册</div>
      </div>
      <!-- 登录模块 -->
      <div class="login_num" v-if="type == 1">
        <el-form
          :label-position="labelPosition"
          label-width="6.25rem"
          :model="formLabelAlign"
        >
          <el-form-item label="账号">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="formLabelAlign.region"
              type="password"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 注册模块 -->
      <div class="login_num" v-if="type == 2">
        <el-form
          :label-position="labelPosition"
          label-width="7.5rem"
          :model="formLabelAlign"
        >
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
  width: 35.1429rem;
  height: 31.25rem;
  padding: 10% 0;
  text-align: center;
  background: url("../assets/imgs/login_bg.jpg");
}
.box {
  width: 37.5rem;
  margin: 0 auto;
  padding-bottom: 1.25rem;
  background: #fff;
}
.title {
  display: flex;
  justify-content: space-between;
  font-size: xx-large;
  padding: 1.25rem 1.875rem;
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
  padding: 1.25rem 1.875rem;
}
.btns {
  padding: 0.3125rem 0;
  width: 10rem;
  text-align: center;
  background: skyblue;
  color: #fff;
  font-size: 0.875rem;
  border-radius: 12.5rem;
  margin-left: 12.5rem;
}
.btns:hover {
  background: pink;
  color: #333;
  cursor: pointer;
}
</style>
