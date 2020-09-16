<template>
  <div class="login">
    <div class="box">
      <div class="title">
        <div class="denglu">
          登录
        </div>
        <div class="zhuce">
          注册
        </div>
      </div>
      <!-- 登录模块 -->
      <div class="login_num" v-if="type == 1">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
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
          <el-form-item label="验证码">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>
      </div>
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
        type: ""
      }
    };
  }
};
</script>

<style scoped>
.login {
  width: 35.142857rem;
  /* height: 500px; */
  padding: 10% 0;
  text-align: center;
  background: url("../assets/imgs/login_bg.jpg");
}
.box {
  width: 600px;
  margin: 0 auto;

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
</style>
